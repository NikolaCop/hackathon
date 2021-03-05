import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Game = new Schema(
  {
    name: { type: String, required: true },
    picture: { type: String }

  },
  { timestamps: true, toJSON: { virtuals: true } }

)

export default Game
