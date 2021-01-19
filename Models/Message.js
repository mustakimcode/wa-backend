import mongoose from "mongoose";
const { Schema } = mongoose;
let Scheme = new Schema({
  message_description: {
    type: String,
  },
  message_responsible: {
    type: String,
  },
  message_priority: {
    type: String,
  },
  message_completed: {
    type: Boolean,
  },
});

let Message = mongoose.model("Message", Scheme);
export default Message;
