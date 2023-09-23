export default class PostsFetcher {
  static API_URL = "https://jsonplaceholder.typicode.com/posts";
  static instance = null;

  static getIntance() {
    if (!PostsFetcher.instance) {
      PostsFetcher.instance = new PostsFetcher();
    }

    return PostsFetcher.instance;
  }

  async fetchPosts(limit = 10) {
    const response = await fetch(`${this.API_URL}?_limit=${limit}`);
    return response.json();
  }

  async addPost(post) {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    });

    return response.json();
  }
}
