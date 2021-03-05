import { teamSignUpsService } from "../Services/TeamSignUpsService.js"


export default class TeamSignUpsController{
  constructor(){
    console.log("Hello from the sign ups controller!")
    teamSignUpsService
  }
}
