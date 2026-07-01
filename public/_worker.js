// First-party analytics proxy (Cloudflare Pages advanced mode).
//
// Tracker/ad blockers key on the third-party host (analytics.sentineloc.io)
// and Umami's default script name (script.js). Serving both first-party under
// a neutral path defeats that — there is no third-party host or known filename
// to match, and the audience skews privacy-hardened (uBlock / Brave / IronFox).
//
//   /o/o.js      -> https://analytics.sentineloc.io/script.js   (the tracker)
//   /o/api/send  -> https://analytics.sentineloc.io/api/send    (the collector)
//
// _routes.json limits the Worker to /o/*; everything else is served statically.
// The real client IP is forwarded so Umami keeps correct geo + visitor hashing
// (otherwise every visitor would look like the Worker's egress IP).

const UPSTREAM = "https://analytics.sentineloc.io";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!url.pathname.startsWith("/o/")) return env.ASSETS.fetch(request);

    const rest = url.pathname.slice(2);                         // "/o.js" | "/api/send"
    const upstreamPath = rest === "/o.js" ? "/script.js" : rest;
    const target = UPSTREAM + upstreamPath + url.search;

    const headers = new Headers(request.headers);
    headers.delete("host");                                     // let fetch set it from target
    headers.delete("cookie");                                   // cookieless; nothing to forward
    const ip = request.headers.get("CF-Connecting-IP");
    if (ip) headers.set("X-Forwarded-For", ip);

    const body = request.method === "GET" || request.method === "HEAD"
      ? undefined
      : await request.arrayBuffer();

    const resp = await fetch(target, { method: request.method, headers, body, redirect: "manual" });
    return new Response(resp.body, resp);
  },
};
