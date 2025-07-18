import { getDeployStore } from "@netlify/blobs";
import { v4 as uuid } from "uuid";

export default async (req) => {
  try {
    // 1. Get the deploy store named "GEM-UserInquiry"
    const store = getDeployStore("GEM-UserInquiry");

    // 2. Generate a unique key
    const key = uuid();

    // 3. Read the incoming request body as text
    const body = await req.json();
    // 4. Save the data to the blob store under the generated key
    await store.set(key, JSON.stringify(body));
    // 6. Return the blobs list with CORS headers
    return new Response(JSON.stringify({ message: "Saved!", statusCode: 200}), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Allow requests from all origins (for development)
      },
    });
  } catch (err) {
    console.error("Blob Error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
};