import { commentsService } from "../Services/CommentsService.js"


export default class CommentsController{
  constructor(){
    console.log("Hello from the comments Controller!")
    commentsService
  }
}
