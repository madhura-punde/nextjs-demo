import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 border hover:shadow-lg transition-shadow">
      <Link
        href={`/posts/${post.slug}`}
        className="text-xl font-semibold text-blue-600 hover:underline"
      >
        {post.title}
      </Link>
      <p className="text-gray-600 mt-2">{post.content.slice(0, 100)}...</p>
    </div>
  );
}
