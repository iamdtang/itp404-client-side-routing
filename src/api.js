function _fetch(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

export function fetchPosts() {
  return _fetch("https://jsonplaceholder.typicode.com/posts?_expand=user");
}

export function fetchPost(id) {
  return _fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}?_expand=user&_embed=comments`
  );
}

export function fetchCommentsForPost(postId) {
  return _fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
}
