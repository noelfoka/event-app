import { Schema } from "mongoose";

const EventSchema = new Schema({
  title: {type: "String",required: true},
  description: {type: "String"},
})