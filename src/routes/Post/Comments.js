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

              <Form
                method="post"
                action={`/posts/${params.id}/comments/${comment.id}/destroy`}
              >
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
