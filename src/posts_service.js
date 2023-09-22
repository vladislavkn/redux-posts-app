import PostsFetcher from "./posts_fetcher";
import store from "./store";
import { FETCH_POSTS } from "./store/types";

export default class PostsService {
  postFetcher = PostsFetcher.getIntance();
  static instance = null;

  static getIntance() {
    if (!PostsService.instance) {
      PostsService.instance = new PostsService();
    }

    return PostsService.instance;
  }

  async getPosts() {
    const posts = await this.postFetcher.fetchPosts();
    store.dispatch({
      type: FETCH_POSTS,
      payload: posts,
    });
  }
}
