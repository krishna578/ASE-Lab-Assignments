package org.ase;
 
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

import com.mongodb.DBObject;
 
@Path("/login")
public class LoginService {
 
	@GET
	@Path("{username}")
	public Response getMsg(@PathParam("username") String username) {
 
		loginMongo login = new loginMongo();
		String output = login.loginmongo(username); 
		if(null!= output){
			return Response.status(200).entity(output).build();
		}else{
			return Response.status(400).entity("fail").build();
		}
 
	}
 
}