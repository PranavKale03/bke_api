import mongoose from "mongoose";
const { Schema } = mongoose;

const messageSchema = new Schema({
  user_id: { type: String, required: false },
  user_name: { type: String, required: false },
  message: { type: String, required: false },
  timestamp: { type: String, required: false },
});

const memberSchema = new Schema({
  user_id : {type : String, required: false},
  user_name : {type : String, required: false},
  gender : {type: String, required : false},
});

const communitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user_name: {
    type : String,
    required : true,
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  adminId: {
    type: String,
    require: true,
  },
  profile_image: {
    type : String,
  },
  ratings:{
    type : Number,
  },
  members: [memberSchema],
  messages: [messageSchema],
});

const Community = mongoose.model("community", communitySchema);
const Message = mongoose.model("message", messageSchema);
const Member = mongoose.model("member", memberSchema)
export { Message, Member };
export default Community;
