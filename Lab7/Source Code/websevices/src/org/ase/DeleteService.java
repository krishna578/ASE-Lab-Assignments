package org.ase;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.json.simple.JSONObject;

@Path("/delete")

public class DeleteService {
	@DELETE
	  @Path("{id}")
	public Response getMsg(@PathParam("id") String id) {
		DeleteMongo delete = new DeleteMongo();
		delete.delete(id);
		return Response.status(200).entity("").build();
		}}
