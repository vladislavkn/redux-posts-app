const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = async (limit = 10) => {
  const response = await fetch(`${API_URL}?_limit=${limit}`);
  return response.json();
};

export const addPost = async (post) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(post),
  });

  return response.json();
};
