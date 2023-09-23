import PostsFetcher from "./posts_fetcher";
import store from "./store";
import { addPost, deletePost, setPosts } from "./store/actions";

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
    store.dispatch(setPosts(posts));
  }

  deletePost(postId) {
    store.dispatch(deletePost(postId));
  }

  async addPost(post) {
    const newPost = await this.postFetcher.addPost(post);
    store.dispatch(addPost(newPost));
  }
}
