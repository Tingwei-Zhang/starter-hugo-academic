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

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return new Response(JSON.stringify({ error: "storage not configured" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }

  const queryUrl = `${supabaseUrl}/rest/v1/canary_events?token=eq.${encodeURIComponent(token)}&order=ts.desc`;
  const resp = await fetch(queryUrl, {
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
    },
  });

  const rawText = await resp.text();
  let events = [];
  try {
    events = JSON.parse(rawText);
  } catch (_) {}

  return new Response(
    JSON.stringify({
      token,
      detected: Array.isArray(events) && events.length > 0,
      count: Array.isArray(events) ? events.length : 0,
      events,
      debug: { status: resp.status, rawLength: rawText.length, queryUrl },
    }),
    { status: 200, headers: { "content-type": "application/json", "cache-control": "no-store" } }
  );
};
