package org.ase;
 
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

 
@Path("/test1")
public class testservice {
 
	@GET
	@Path("{username}/{password}")
	public Response getMsg(@PathParam("username") String username) throws IOException {
		URL url = new URL("http://localhost:8080/RESTfulExample/json/product/get");
		HttpURLConnection conn = (HttpURLConnection)
		url.openConnection();
		conn.setDoOutput(true);
		conn.setRequestMethod("POST");
		conn.setRequestProperty("Content-Type", "application/json");
		String input = "{\"qty\":100,\"name\":\"iPad 4\"}";
		OutputStream os = conn.getOutputStream();
		os.write(input.getBytes());
		os.flush();

		if (conn.getResponseCode() != HttpURLConnection.HTTP_CREATED) {
			throw new RuntimeException("Failed : HTTP error code : "
				+ conn.getResponseCode());
		}

		BufferedReader br = new BufferedReader(new InputStreamReader(
				(conn.getInputStream())));
		String output;
		System.out.println("Output from Server .... \n");
		while ((output = br.readLine()) != null) {
			System.out.println(output);
		}

		conn.disconnect();
			return Response.status(400).entity("fail").build();
		}
 
	}
 
