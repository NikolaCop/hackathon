import { dbContext } from '../db/dbContext'
import { BadRequest } from '../utils/Errors'

class SignupsService {
  async find(query = {}) {
    const signups = await dbContext.Signups.find(query)
    return signups
  }

  async createSignup(body) {
    return await dbContext.Signups.create(body)
  }

  async deleteSignup(id) {
    return await dbContext.Signups.findByIdAndDelete(id)
  }
}

export const signupsService = new SignupsService()
