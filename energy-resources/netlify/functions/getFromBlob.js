import { getDeployStore } from "@netlify/blobs";

export default async (req) => {
  try {
    const store = getDeployStore("GEM-UserInquiry");
    const { blobs } = await store.list();

    const blobData = [];

    for (const blob of blobs) {
      const content = await store.get(blob.key); // This is likely already a string
      let parsedJSON;

      try {
        parsedJSON = JSON.parse(content); // try parsing
      } catch {
        parsedJSON = content; // fallback to raw if not JSON
      }

      blobData.push({
        key: blob.key,
        etag: blob.etag,
        data: parsedJSON,
      });
    }

    return new Response(JSON.stringify(blobData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
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
