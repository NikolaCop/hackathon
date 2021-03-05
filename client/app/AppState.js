import { EventEmitter } from './Utils/EventEmitter.js'
import Profile from "./Models/Profile.js"
import Game from "./Models/Game.js"
import Post from "./Models/Post.js"
import TeamSignUp from "./Models/TeamSignUp.js"
import { isValidProp } from './Utils/isValidProp.js'

class AppState extends EventEmitter {
  user = {}
  account = {}
  values = []

  /**@type {Profile[]} */
  profiles = []

  /**@type {Game[]} */
  games = []

  /**@type {Post[]} */

  posts = []

  /**@type {TeamSignUp[]} */

  teamSignUps = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
