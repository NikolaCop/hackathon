import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.SchemaTypes.ObjectId

const Post = new Schema(
  {
    game: { type: ObjectId, ref: 'Game', required: true },
    wantedNum: { type: Number, required: true }
  },
  { timestamps: true, _id: false, toJSON: { virtuals: true } }

)

export default Post
