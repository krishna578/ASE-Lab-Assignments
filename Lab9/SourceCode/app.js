var express = require('express');
var request = require('request');
var app = express();
var port = 8001;

var Name;
var IngredientName;
var ingredients = new Array();
var Recpie = {
	Recpies: [
				 ]
};
app.get('/', function (req, res) {

	var objRes = res;
	var objReq = req;
	var querystring = req.query.search;
	GetRecpie(querystring,objRes);
	//GetIngredients(querystring);
	
	console.log("Came Out Completely")

})

function GetRecpie(Query,ResponseObj) {
	request('https://api.edamam.com/search?_app_id=d76d6dce&_app_key=7921db5bb483ee6fb7dbf918c3bbab34&q=' + Query, function (error, response, body) {

		if (response.statusCode !== 200) {
			return console.log('Invalid Status Code Returned:', response.statusCode);
		}

		var obj = JSON.parse(body)
		
		for (var i = 0; i < obj.hits.length; i++) {

			var hits = obj.hits[i]

			var ingredients = new Array();
			var Name = hits.recipe.label;
			console.log("Entered Step1")
			//hits.recipe.ingredients.length
			for (var j = 0; j <hits.recipe.ingredients.length; j++) {
				IngredientName = hits.recipe.ingredients[j].food;
				
				GetIngredients(IngredientName,addData)
			}
			
		}
		ResponseObj.contentType('application/json');
	ResponseObj.write(JSON.stringify(Recpie));
	ResponseObj.end();

	});
}
function addData(Itms)
{
	console.log("Entered Call Back")
	console.log(Itms.length)
	ingredients = new Array();
	ingredients.push({
					"Ingredient Name": IngredientName,
					"Items": Itms
				})
	Recpie.Recpies.push({
				"Recpie Name":Name,
				"Ingredients": ingredients
			})
}

function GetIngredients(Ingredient,addData) {
	var Lists = new Array();
	request('https://api.nutritionix.com/v1_1/search/' + Ingredient + '?results=0%3A5&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=57c8fbd3&appKey=f06cab2acb1fc95e3b46dbb5239b34ac', function (error, response, body) {

		if (response.statusCode !== 200) {
			return console.log('Invalid Status Code Returned:', response.statusCode);
		}

		var obj = JSON.parse(body)
		for (var i = 0; i < obj.hits.length; i++) {
			Lists.push({
				"ItemName": obj.hits[i].fields.item_name,
				"BrandName": obj.hits[i].fields.brand_name
			})
		}
		console.log("Data ready and call back function called")
		addData(Lists)
		
	});

}

app.listen(port, function (Err) {

	console.log("Running Server on Port " + port);
});