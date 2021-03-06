import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Game = new Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    description: { type: String, required: true}

  },
  { timestamps: true, toJSON: { virtuals: true } }

)

export default Game
