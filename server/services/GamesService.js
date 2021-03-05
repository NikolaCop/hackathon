import { dbContext } from '../db/dbContext'
import { BadRequest } from '../utils/Errors'

class GamesService {
  async find(query = {}) {
    const games = await dbContext.Games.find(query)
    return games
  }

  async findById(id) {
    const game = await dbContext.Games.findById(id)
    if (!game) {
      throw new BadRequest('Invalid ID')
    }
    return game
  }

  async createGame(body) {
    return await dbContext.Games.create(body)
  }

  async deleteGame(id) {
    return await dbContext.Games.findByIdAndDelete(id)
  }
}

export const gamesService = new GamesService()
