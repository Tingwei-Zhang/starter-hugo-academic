import { getStore } from "@netlify/blobs";

export default async (request, context) => {
  const url = new URL(request.url);
  const token = url.searchParams.get("token") || "missing";

  const event = {
    ts: new Date().toISOString(),
    ip:
      request.headers.get("x-nf-client-connection-ip") ||
      request.headers.get("x-forwarded-for") ||
      null,
    ua: request.headers.get("user-agent") || null,
    referer: request.headers.get("referer") || null,
  };

  try {
    const store = getStore({ name: "canary-events", consistency: "strong" });

    let events = [];
    try {
      const existing = await store.get(token, { type: "json" });
      if (existing) events = existing;
    } catch (_) {}

    events.push(event);
    await store.setJSON(token, events);
  } catch (e) {
    console.error("Blob write failed:", e);
  }

  return new Response("Supplementary material temporarily unavailable.", {
    status: 200,
    headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" },
  });
};
