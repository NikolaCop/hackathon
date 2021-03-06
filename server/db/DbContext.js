import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
// import UserSchema from '../models/User'
import GameSchema from '../models/Game'
import PostSchema from '../models/Post'
import SignupSchema from '../models/Signup'
import CommentSchema from '../models/Comment'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  // Users = mongoose.model('User', UserSchema);
  Games = mongoose.model('Game', GameSchema);

  Posts = mongoose.model('Posts', PostSchema);
  Signups = mongoose.model('Signups', SignupSchema)
  Comments = mongoose.model('Comments', CommentSchema)
}

export const dbContext = new DbContext()
