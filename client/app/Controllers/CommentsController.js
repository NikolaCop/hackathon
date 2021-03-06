import { ProxyState } from "../AppState.js"
import { commentsService } from "../Services/CommentsService.js"


export default class CommentsController{
  constructor(){
    console.log("Hello from the comments Controller!")
    // commentsService
  }

  createComment(event, id) {
    event.preventDefault()
    console.log('cooking a fresh comment')
    const form = event.target
    const rawPost = {
      post: id,
      content: form.content.value,
      score: 0
    }
    commentsService.createComment(rawPost)
  }
}
