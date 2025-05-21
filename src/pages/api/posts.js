import { posts } from "../../data/posts";

export default function handler(req, res) {
  if (req.method === "GET") {
    // Handle GET request
    console.log(req.method, posts);
    res.status(200).json(posts);
  } else if (req.method === "POST") {
    // Handle POST request
    const { title, content } = req.body;
    const newPost = {
      slug: posts.length + 1,
      title,
      content,
    };
    posts.push(newPost);
    res.status(201).json(newPost);
  } else if (req.method === "PATCH") {
    // Handle PATCH request
    const { id } = req.query;
    const body = req.body;

    const index = posts.findIndex((post) => post.slug === parseInt(id));
    if (index === -1) {
      res.status(404).json({ error: "Post not found" });
      return;
    }

    posts[index] = {
      ...posts[index],
      ...body,
    };
    res.status(200).json(posts[index]);
  } else {
    // Handle unsupported methods
    res.setHeader("Allow", ["GET", "POST", "PATCH"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
