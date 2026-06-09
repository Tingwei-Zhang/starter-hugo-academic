export default async (request, context) => {
  const url = new URL(request.url);
  // Token comes from query param (rewrite) or path /c/:token
  const pathMatch = url.pathname.match(/\/c\/([^/]+)/);
  const token = url.searchParams.get("token") || (pathMatch && pathMatch[1]) || "missing";

  const event = {
    token,
    ts: new Date().toISOString(),
    ip:
      request.headers.get("x-nf-client-connection-ip") ||
      request.headers.get("x-forwarded-for") ||
      null,
    ua: request.headers.get("user-agent") || null,
    referer: request.headers.get("referer") || null,
  };

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  let debug = "";

  if (supabaseUrl && supabaseKey) {
    try {
      const resp = await fetch(`${supabaseUrl}/rest/v1/canary_events`, {
        method: "POST",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify(event),
      });
      debug = `status:${resp.status}:${await resp.text()}`;
    } catch (e) {
      debug = `fetch_error:${e.message}`;
    }
  } else {
    debug = `env_missing:url=${!!supabaseUrl},key=${!!supabaseKey}`;
  }

  const body = `<!-- ${debug} | url:${url.href} | token:${token} -->\nSupplementary material temporarily unavailable.`;

  return new Response(body, {
    status: 200,
    headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" },
  });
};
