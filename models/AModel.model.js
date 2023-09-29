import mongoose from 'mongoose';

const { Schema } = mongoose;

const AModel = new Schema(
  {
    AModel: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('AModel', AModel);