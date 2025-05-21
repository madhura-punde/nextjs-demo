import Link from "next/link";
import PostCard from "../components/PostCard";
// import "../Styles/globals.css";

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json();
  return { props: { posts } };
};

export default function Home({ posts }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Mini Blog</h1>
          <p className="text-sm mt-1">
            Welcome to the blog! Stay updated with the latest posts.
          </p>
        </div>
      </header>
      <main className="max-w-3xl mx-auto p-4">
        <Link
          href="/new-post"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Create a New Post
        </Link>

        <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.slug} post={post} />)
        ) : (
          <p className="text-gray-600">No posts available. Check back later!</p>
        )}
      </main>
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm">© 2025 Mini Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
