import { dbContext } from '../db/dbContext'
import { BadRequest } from '../utils/Errors'

class UsersService {
  async find(query = {}) {
    const users = await dbContext.Users.find(query)
    return users
  }

  async findById(id) {
    const user = await dbContext.Users.findById(id)
    if (!user) {
      throw new BadRequest('Invalid ID')
    }
    return user
  }

  async createUser(body) {
    return await dbContext.Users.create(body)
  }
}

export const usersService = new UsersService()
