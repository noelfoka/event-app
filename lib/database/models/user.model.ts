import { Schema } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: "string", required: true, unique: true },
  email: { type: "string", required: true, unique: true},
  username: { type: "string", required: true, unique: true},
  firstName: { type: "string", required: true } 
});