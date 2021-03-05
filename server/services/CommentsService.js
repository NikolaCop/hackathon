import { dbContext } from '../db/dbContext'
import { BadRequest } from '../utils/Errors'

class CommentsService {
  async find(query = {}) {
    const comments = await dbContext.Comments.find(query)
    return comments
  }

  async vote(vote, id) {
    let body = {}
    body = await dbContext.Comments.findById(id)
    if (vote) {
      body._doc.score++
    } else {
      body._doc.score--
    }
    return await dbContext.Comments.findOneAndUpdate(id, body._doc)
  }

  async createComment(body) {
    return await dbContext.Comments.create(body)
  }

  async deleteComment(id) {
    return await dbContext.Comments.findByIdAndDelete(id)
  }
}

export const commentsService = new CommentsService()
