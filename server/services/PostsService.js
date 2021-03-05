import { dbContext } from '../db/dbContext'
import { BadRequest } from '../utils/Errors'

class PostsService {
  async find(query = {}) {
    const posts = await dbContext.Posts.find(query)
    return posts
  }

  async findById(id) {
    const post = await dbContext.Posts.findById(id)
    if (!post) {
      throw new BadRequest('Invalid ID')
    }
    return post
  }

  async createPost(body) {
    return await dbContext.Posts.create(body)
  }

  async deletePost(id) {
    return await dbContext.Posts.findByIdAndDelete(id)
  }
}

export const postsService = new PostsService()
