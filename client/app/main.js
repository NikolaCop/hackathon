import { AuthController } from "./Controllers/AuthController.js";
import CommentsController from "./Controllers/CommentsController.js";
import GamesController from "./Controllers/GamesController.js";
import PostsController from "./Controllers/PostsController.js";
import ProfilesController from "./Controllers/ProfilesController.js";
import SignUpsController from "./Controllers/TeamSignUpsController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  authController = new AuthController();
  // valuesController = new ValuesController();
  profilesController = new ProfilesController();

  gamesController = new GamesController();

  postsController = new PostsController();

  commentsController = new CommentsController();

  signUpsController = new SignUpsController();
}

window["app"] = new App();
