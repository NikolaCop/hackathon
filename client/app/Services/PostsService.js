import { ProxyState } from "../AppState.js";
import Post from "../Models/Post.js";
import { api } from "./AxiosService.js";


class PostsService{
  constructor(){
    console.log("Hello from the posts service!")
    this.getPosts()
  }
  async createPost(rawPost) {
    try {
      const res = await api.post('api/posts', rawPost)
      ProxyState.posts = [...ProxyState.posts, new Post(res.data)]
    } catch (error) {
      console.error(error)
    }
  }
  async getPosts() {
    try {
      const res = await api.get('api/posts')
      ProxyState.posts = res.data.map(rawPostsData => new Post(rawPostsData))
    } catch (error) {
      console.log(error)
    }
  }
}


export const postsService = new PostsService();
