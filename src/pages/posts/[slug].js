import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/posts`);
  const posts = await res.json();
  const post = posts.find((p) => p.slug.toString() === params.slug);

  const publishedDate = new Date().toLocaleDateString();

  return { props: { post, publishedDate } };
};

export default function PostDetail({ post, publishedDate }) {
  const router = useRouter();

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-6 shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold">{post.title}</h1>
          <p className="text-lg mt-2">Published on {publishedDate}</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
        <article>
          <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
          <p className="text-gray-700 leading-relaxed">{post.content}</p>
        </article>
        <button
          onClick={() => router.push("/")}
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Back to Home
        </button>
      </main>
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm">© 2025 Mini Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
