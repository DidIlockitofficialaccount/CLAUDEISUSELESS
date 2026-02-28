export async function POST(req) {
  const body = await req.json();
  const res = await fetch("https://api.cobalt.tools/", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      url: body.url,
      audioFormat: body.format || "mp3",
      isAudioOnly: true,
      filenameStyle: "pretty",
    }),
  });
  return Response.json(await res.json());
}
```

**5. deploy:**
```
npm install
git init && git add . && git commit -m "yt.rip"
