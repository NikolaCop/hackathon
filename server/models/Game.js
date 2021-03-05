import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Game = new Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    picture: { type: String }

  },
  { timestamps: true, _id: false, toJSON: { virtuals: true } }

)

export default Game
