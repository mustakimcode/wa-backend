import mongoose from "mongoose";
const { Schema } = mongoose;
let Scheme = new Schema({
  user_responsible: {
    type: String,
  },
  user_name: {
    type: String,
  },
  is_active: {
    type: Boolean,
  },
});

let User = mongoose.model("User", Scheme);
export default User;
