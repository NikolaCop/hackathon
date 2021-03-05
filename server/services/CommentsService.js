import { dbContext } from '../db/dbContext'
import { BadRequest } from '../utils/Errors'

class CommentsService {
  async find(query = {}) {
    const comments = await dbContext.Comments.find(query)
    return comments
  }

  async vote(vote, id) {
    // FIXME Score isn't ever updating
    let body = {}
    body = await dbContext.Comments.findById(id).populate('comment')
    console.log(body.score)
    if (vote) {
      body.score++
    } else {
      body.score--
    }
    body.score = 10
    return await dbContext.Comments.findByIdAndUpdate(body)
  }

  async createComment(body) {
    return await dbContext.Comments.create(body)
  }

  async deleteComment(id) {
    return await dbContext.Comments.findByIdAndDelete(id)
  }
}

export const commentsService = new CommentsService()
