function _fetch(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

export function fetchPosts() {
  return _fetch("https://jsonplaceholder.typicode.com/posts?_expand=user");
}
