import { useState } from "react";
import { Form, useLoaderData, useParams } from "react-router-dom";
import Modal from "../../Modal";

export default function Comments() {
  const comments = useLoaderData();
  const params = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState();

  return (
    <div className="post-comments">
      {isModalOpen && (
        <Modal
          title="Confirm Delete"
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          <p>Are you sure you want to delete your comment?</p>

          <p>{commentToDelete.body}</p>

          <Form
            method="post"
            action={`/posts/${params.id}/comments/${commentToDelete.id}/destroy`}
            onSubmit={() => {
              setIsModalOpen(false);
            }}
          >
            <button type="submit" className="btn btn-danger btn-sm">
              Delete
            </button>
          </Form>
        </Modal>
      )}

      <ol>
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              {comment.body}

              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => {
                  setIsModalOpen(true);
                  setCommentToDelete(comment);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
