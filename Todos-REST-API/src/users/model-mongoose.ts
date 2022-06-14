import { model, Schema } from "mongoose";
import { User } from "./interfaces";

const schema = new Schema<User>({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default model<User>('User', schema);
