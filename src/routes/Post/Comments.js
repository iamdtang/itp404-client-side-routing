import { Form, useLoaderData, useParams } from "react-router-dom";

export default function Comments() {
  const comments = useLoaderData();
  const params = useParams();

  return (
    <div className="post-comments">
      <ol>
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              {comment.body}

              <Form method="post" action={`/comments/${comment.id}/destroy`}>
                <input type="hidden" name="postId" value={params.id} />
                <button type="submit" className="btn btn-danger btn-sm">
                  Delete
                </button>
              </Form>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
