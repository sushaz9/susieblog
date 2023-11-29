import { WEB_SITE } from "config";
import { CommentForm } from "./CommentForm";

export default async function Comments({ postSlug }: { postSlug: string }) {
  // `/blog

  // const WEBSITE_URL = "http://localhost:3000";

  let comments = [];
  try {
    const commentsResult = await fetch(`${WEB_SITE}/api/comments/${postSlug}`, {
      next: { revalidate: 5 },
    });
    const response = await commentsResult.json();
    comments = response.comments.rows;
  } catch (err) {}

  return (
    <div>
      <CommentForm postSlug={postSlug} />
      <h2>| Comments |</h2>
      {/* @ts-ignore */}
      {comments.map((comment) => {
        return (
          <li key={comment.id}>
            {comment.username} says ...
            <br />
            {comment.content}
          </li>
        );
      })}
    </div>
  );
}
