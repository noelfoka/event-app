import { Schema } from "mongoose";

const EventSchema = new Schema({
  title: { type: String,required: true },
  description: { type: String },
  location: { type: String },
  createdAt: { type: Date, default: Date.now},
  imageUrl: { type: String, required: true },
  startDate: { type: Date, required: true },
})