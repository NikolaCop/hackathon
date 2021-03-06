import { postsService } from '../Services/PostsService.js'
import { ProxyState } from '../AppState.js'

// function _draw() {
//   const posts = ProxyState.posts
//   let template = ''
//   posts.forEach(posts => {
//     document.getElementById(posts.gameId).innerHTML += posts.PostFormTemplate
// })
// }

export default class PostsController {
  constructor() {
    console.log('Hello from the posts Controller!')
    // ProxyState.on('posts',_draw)
    // _draw()
  }
  getPosts() {
    postsService.getPosts()
  }

  // deletePost(id) {
  //   postsService.deletePost(id)
  // }

  createPost(event, id) {
    event.preventDefault()
    console.log('cooking a fresh post')
    const form = event.target
    const rawPost = {
      game: id,
      // title: form.game.value,
      wantedNum: parseInt(form.wantedNum.value)
    }
    postsService.createPost(rawPost)
  }
}
