import { ProxyState } from '../AppState.js'
import Game from '../Models/Game.js'
import { api } from './AxiosService.js'

class GamesService {
  constructor() {
    console.log('Hello from the games service')
    this.getGames()
  }

  async deleteGame(id) {
    try {
      const res = await api.delete('api/games/' + id)
      this.getGames()
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  async getGames() {
    try {
      const res = await api.get('api/games')
      ProxyState.games = res.data.map(rawGameData => new Game(rawGameData))
    } catch (error) {
      console.log(error)
    }
  }

  async createGame(rawGame) {
    try {
      const res = await api.post('api/games', rawGame)
      ProxyState.games = [...ProxyState.games, new Game(res.data)]
    } catch (error) {
      console.error('no good create game')
    }
  }
}

export const gamesService = new GamesService()
