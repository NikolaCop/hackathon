import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.SchemaTypes.ObjectId

const Signup = new Schema(
  {
    post: { type: ObjectId, ref: 'Post', required: true },
    account: { type: String, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }

)

export default Signup
