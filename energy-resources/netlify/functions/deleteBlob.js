import { getDeployStore } from "@netlify/blobs";

export default async (req, context) => {
  if (req.method !== "DELETE") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: {
        Allow: "DELETE",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  try {
    const store = getDeployStore("GEM-UserInquiry");
    const { blobs } = await store.list();

    for (const blob of blobs) {
      await store.delete(blob.key);
    }

    return new Response(JSON.stringify({ message: "All blobs deleted." }), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
};
