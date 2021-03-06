import { postsService } from '../Services/PostsService.js'
import { ProxyState } from '../AppState.js'
export default class Game {
  constructor(data) {
    this.name = data.name
    this.img = data.img
    this.description = data.description
    this.id = data.id || data._id
  }

  get Template() {
    return /*html*/ `
.<div class="row">
  <div class="col-4 card mt-4 mr-4 ml-4 text-light" id="cardbg">
    <button class="btn mt-4 btn-dark text-danger d-flex text-center m-2 cgw" onclick="app.gamesController.deleteGame('${this.id}')">Delete Game</button>
    <div class="row">
      <div class="col-6 mt-4"><img
      src="${this.img}" width="250px" alt=""></div>
      <div class="col">
        <div class="row ml-2">
          <div class="col-12 mt-3">
            <h3>${this.name}</h3>
          </div>
          <div class="col-12 mt-3 game-column-height">
            <h6>${this.description}</h6>
          </div>
          <div class="col-12">
            <form class="form m-3" onsubmit="app.postsController.createPost(event, '${this.id}')">
              <div class="form-group">
                <input type="text" name="game" class="form-control" placeholder="Team Name"
                    aria-describedby="helpId">
                <input type="" name="wantedNum" class="form-control mt-1" placeholder="Players Needed"
                    aria-describedby="helpId">
                <button class="btn mt-1 btn-success w-100" type="submit">Create Post</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-7" id='${this.id}'>${this.PostTemplate}</div>

  `
  }

  get PostTemplate() {
    let template = ''
    let posts = ProxyState.posts.filter(p => p.gameId == this.id)
    posts.forEach(p => template += p.PostFormTemplate)

    return template
  }
}
