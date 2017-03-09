package org.ase;

import com.mongodb.*;
import com.mongodb.util.JSON;

public class signupMongo {

	public boolean insertdb(String input) {

		DBObject dbObject = (DBObject)JSON.parse(input);
	        MongoClientURI uri  = new MongoClientURI("mongodb://root:admin@ds015909.mlab.com:15909/lab8_ase"); 
	        MongoClient client = new MongoClient(uri);
	        DB db = client.getDB(uri.getDatabase());
	        DBCollection Users = db.getCollection("userdata");
	        Users.insert(dbObject);
	        client.close();
		return true;
	}
	
	
	 public static BasicDBObject[] createSeedData(String userName, String password, String firstName, String lastName, String address, String age){
	        
	        BasicDBObject document = new BasicDBObject();
	        document.put("firstname", firstName);
	        document.put("lastname", lastName);
	        document.put("address", address);
	        document.put("age", age);
	        document.put("username", userName);
	        document.put("password", password);
	        
	        
	        
	        final BasicDBObject[] seedData = {document};
	        
	        return seedData;
	    }
	    
	    
	
	
	

}
