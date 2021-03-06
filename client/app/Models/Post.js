import { ProxyState } from "../AppState.js"

export default class Post {
  constructor(data) {
    this.wantedNum = data.wantedNum
    this.id = data.id || data._id
    this.gameId = data.game
  }

  get PostFormTemplate() {
    return /*html*/ `
   <div class="col-12 card post-height mt-4 ml-4 text-light" id="cardbg">
      <h1 class='text-center'>Post Area</h1>
      <h5 class="m-2">
        <div class="form-check form-check-inline">
            <label class="form-check-label">
                <input class="form-check-input" type="checkbox" name="" value="checkedValue">
                Display
                value
            </label>
        </div>
      </h5>
      <h5 class="m-2">
        <div class="form-check form-check-inline">
            <label class="form-check-label">
                <input class="form-check-input" type="checkbox" name=""  value="checkedValue">
                Display
                value
            </label>
        </div>
    </h5>
    <h5 class="m-2">
        <div class="form-check form-check-inline">
            <label class="form-check-label">
                <input class="form-check-input" type="checkbox" name="" value="checkedValue">
                Display
                value
            </label>
        </div>
    </h5>
    <form class="form-inline m-3" onsubmit="app.commentsController.createComment(event, '${this.id}')">
        <div class="form-group">
            <label for=""></label>
            <input type="text" name="content"  class="form-control" placeholder=""
                aria-describedby="helpId">
            <button class="btn btn-success ml-2" type="submit">Add Comment</button>
        </div>
    </form>
    <div> ${this.CommentsById}</div>
    </div>
      `
  }

  get CommentsById() {
    let template = `<div class="row">
      <div class="col-12 card bg-light text-dark p-3 shadow-lg">Hey</div>
    </div>`
    let comments = ProxyState.comments.filter(c => c.postId == this.id)
    comments.forEach(c => template += c.Template)

    return template
  }
}
