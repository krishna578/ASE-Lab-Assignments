package org.ase;
 
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.json.simple.JSONObject;

@Path("/signup")
public class SignUpService {
 
	  @POST
	  @Produces(MediaType.APPLICATION_JSON)
	  @Consumes(MediaType.APPLICATION_JSON)
	public Response getMsg(JSONObject obj) {
		  signupMongo signup = new signupMongo();
		  signup.insertdb(obj.toString());
			return Response.status(200).entity(obj.toString()).build();
		}
 
}