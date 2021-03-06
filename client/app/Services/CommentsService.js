import { ProxyState } from "../AppState.js";
import Comment from "../Models/Comment.js";
import { api } from "./AxiosService.js";


class CommentsService{
  constructor(){
    console.log("Hello from the commentsService")
    this.getComments()
  }
  async createComment(rawPost) {
    try {
      const res = await api.post('api/comments', rawPost)
      ProxyState.comments = [...ProxyState.comments, new Comment(res.data)]
    } catch (error) {
      console.error(error)
    }
  }

  async getComments() {
    try {
      const res = await api.get('api/comments')
      ProxyState.comments = res.data.map(rawCommentsData => new Comment(rawCommentsData))
    } catch (error) {
      console.log(error)
    }
  }
}


export const commentsService = new CommentsService();
