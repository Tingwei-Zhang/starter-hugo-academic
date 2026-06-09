import { getStore } from "@netlify/blobs";

export default async (request, context) => {
  const url = new URL(request.url);
  const token = url.searchParams.get("token") || "missing";

  const store = getStore("canary-events");

  // Read existing events for this token (append mode)
  let events = [];
  try {
    const existing = await store.get(token, { type: "json" });
    if (existing) events = existing;
  } catch (_) {}

  events.push({
    ts: new Date().toISOString(),
    ip:
      request.headers.get("x-nf-client-connection-ip") ||
      request.headers.get("x-forwarded-for") ||
      null,
    ua: request.headers.get("user-agent") || null,
    referer: request.headers.get("referer") || null,
  });

  await store.setJSON(token, events);

  return new Response("Supplementary material temporarily unavailable.", {
    status: 200,
    headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" },
  });
};
