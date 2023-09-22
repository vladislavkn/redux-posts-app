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
}
