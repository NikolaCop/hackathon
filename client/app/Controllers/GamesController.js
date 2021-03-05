import { gamesService } from "../Services/GamesService.js"


export default class GamesController{
  constructor(){
    console.log("Hello from the games controller")
    gamesService
  }
}
