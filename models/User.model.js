import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    uid:{
      type: String,
      unique: true,
    },
    email: {
      type: String,
      require: false, 
      index:true, 
      unique:true,
      sparse:true
    },
    profile_image:{
      type : String,
    },
    first_name: {
      type: String,
      require: false,
    },
    last_name:{
      type : String,
      require : false,
    },
    user_name:{
      type : String,
      require : false,
    },
    gender : {
      type : String,
    },
    date_of_birth : {
      type : Date,
    },
    phone_number: {
      type: String,
      unique : true,
    },
    bike_name:{
      type: String,
    },
    communities: {
      type: [{
        community_id: String,
        community_name: String
        // any other paths for features
      }]      ,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

export default User;
