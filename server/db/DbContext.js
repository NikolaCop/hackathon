import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import UserSchema from '../models/User'
import GameSchema from '../models/Game'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Users = mongoose.model('User', UserSchema)
  Games = mongoose.model('Game', GameSchema)
}

export const dbContext = new DbContext()
