import { useLoaderData } from "react-router-dom";

export default function Comments() {
  const comments = useLoaderData();

  console.log(comments);

  return (
    <div className="post-comments">
      <ol>
        {comments.map((comment) => {
          return <li key={comment.id}>{comment.body}</li>;
        })}
      </ol>
    </div>
  );
}
