package org.ase;

import org.bson.types.ObjectId;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;

public class DeleteMongo {

	public boolean delete(String id){
		MongoClientURI uri  = new MongoClientURI("mongodb://root:admin@ds015909.mlab.com:15909/lab8_ase"); 
		MongoClient client = new MongoClient(uri);
		DB db = client.getDB(uri.getDatabase());
		DBCollection Users = db.getCollection("userdata");
		BasicDBObject query = new BasicDBObject();
		ObjectId oid = new ObjectId(id);
		query.put("_id", oid);
		Users.remove(query);
		client.close();
		return true;
	}
}
