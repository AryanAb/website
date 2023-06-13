import { kv } from "@vercel/kv";

function hashify(str) {
  return str.toLowerCase().replace(/ /g, "_");
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    const post = hashify(req.query.post);
    const comments = await kv.hgetall(post);

    return res.status(200).json({ comments });
  } else if (req.method === "POST") {
    const post = hashify(req.body.post);
    const comments = req.body.comments;
    await kv.hset(post, { comments });

    return res.status(200).json({});
  } else if (req.method == "DELETE") {
    const post = hashify(req.query.post);
    await kv.hset(post, { comments: [] });
  }
}
