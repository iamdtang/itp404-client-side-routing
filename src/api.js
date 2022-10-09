function _fetch(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

export function fetchPosts() {
  return _fetch(
    "https://json-server-posts-api.herokuapp.com/api/posts?_expand=user"
  );
}

export function fetchPost(id) {
  return _fetch(
    `https://json-server-posts-api.herokuapp.com/api/posts/${id}?_expand=user&_embed=comments`
  );
}

export function fetchCommentsForPost(postId) {
  return _fetch(
    `https://json-server-posts-api.herokuapp.com/api/posts/${postId}/comments`
  );
}

export function saveComment(comment, postId) {
  return fetch(
    `https://json-server-posts-api.herokuapp.com/api/posts/${postId}/comments`,
    {
      method: "POST",
      body: JSON.stringify({
        body: comment,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  ).then((response) => {
    return response.json();
  });
}

export function updatePost(attributes, postId) {
  return fetch(
    `https://json-server-posts-api.herokuapp.com/api/posts/${postId}`,
    {
      method: "PATCH",
      body: JSON.stringify(attributes),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  ).then((response) => {
    return response.json();
  });
}

export function deleteComment(commentId) {
  return fetch(
    `https://json-server-posts-api.herokuapp.com/api/comments/${commentId}`,
    {
      method: "DELETE",
    }
  ).then((response) => {
    return response.json();
  });
}
