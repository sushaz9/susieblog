import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default function Page() {
  const posts = getPosts();

  return (
    <div>
      <h2 className="flex-col items-center p-8 text-2x1 font-bold font-mono tracking-wide text-indigo-100">
        My posts:{" "}
      </h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
