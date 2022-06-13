import mongoose, { model, Schema } from "mongoose";

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean
  }
});

export default model('Todo', schema);
