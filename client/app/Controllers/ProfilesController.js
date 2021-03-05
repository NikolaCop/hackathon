import { profilesService } from "../Services/ProfilesService.js"


export default class ProfilesController{
  constructor(){
    console.log("Hello from the profile Controller!")
    profilesService
  }
}
