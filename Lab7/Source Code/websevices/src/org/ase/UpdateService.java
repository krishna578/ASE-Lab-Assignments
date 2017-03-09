package org.ase;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.json.simple.JSONObject;

@Path("/update")
public class UpdateService {
 
	  @POST
	  @Path("{username}")
	  @Produces(MediaType.APPLICATION_JSON)
	  @Consumes(MediaType.APPLICATION_JSON)
	public Response getMsg(JSONObject obj,@PathParam("username") String username) {
		updateMongo update = new updateMongo();
		update.updatedb(obj.toString(), username);
			return Response.status(200).entity("").build();
		}
 
}