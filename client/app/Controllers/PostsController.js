import { postsService } from "../Services/PostsService.js"


export default class PostsController{
  constructor(){
    console.log("Hello from the posts Controller!")
    postsService
  }
}
