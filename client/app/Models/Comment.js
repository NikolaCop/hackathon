
export default class Comment{
  constructor(data){
    this.userName = data.userName
    this.content = data.content
    this.vote = data.vote
    this.postId = data.post
  }

  get Template() {
    return /*html*/ `
      <div class="row">
        <div class="col-12 card bg-light text-dark p-3 shadow-lg">Hey</div>
      </div>
    `
  }
}
