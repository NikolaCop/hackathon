import { gamesService } from '../Services/GamesService.js'
import { ProxyState } from '../AppState.js'
function _draw() {
  const games = ProxyState.games
  let template = ''
  games.forEach(game => template += game.Template)
  document.getElementById('games').innerHTML = template
}

export default class GamesController {
  constructor() {
    console.log('Hello from the games controller')
    ProxyState.on('games', _draw)
    ProxyState.on('posts',_draw)
    ProxyState.on('comments', _draw)
    console.log(ProxyState.games)
    _draw()
  }

  getGames() {
    gamesService.getGames()
  }

  deleteGame(id) {
    gamesService.deleteGame(id)
  }

  createGame(event) {
    event.preventDefault()
    console.log('creating game')
    const form = event.target
    const rawGame = {
      name: form.name.value,
      description: form.description.value,
      img: form.img.value
    }
    gamesService.createGame(rawGame)
  }
}
