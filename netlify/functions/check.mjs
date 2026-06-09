import { getStore } from "@netlify/blobs";

export default async (request, context) => {
  const url = new URL(request.url);
  const token = url.searchParams.get("token") || "";
  const secret = url.searchParams.get("secret") || "";

  const expected = process.env.CANARY_CHECK_SECRET || "";
  if (!expected || secret !== expected) {
    return new Response(JSON.stringify({ error: "unauthorized" }), {
      status: 401,
      headers: { "content-type": "application/json" },
    });
  }

  if (!token) {
    return new Response(JSON.stringify({ error: "missing token" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const store = getStore({ name: "canary-events", consistency: "strong" });
  let events = [];
  try {
    const data = await store.get(token, { type: "json" });
    if (data) events = data;
  } catch (_) {}

  return new Response(
    JSON.stringify({ token, detected: events.length > 0, count: events.length, events }),
    { status: 200, headers: { "content-type": "application/json", "cache-control": "no-store" } }
  );
};
