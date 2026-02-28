export async function GET(req) {
  const url = new URL(req.url).searchParams.get("url");
  const res = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`);
  if (!res.ok) return Response.json({ error: "not found" }, { status: 404 });
  return Response.json(await res.json());
}
