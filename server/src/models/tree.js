import { model, Schema } from "mongoose";

const child = new Schema({
  id: String,
  parent: String,
  value: String,
  price: Number,
});
const treeSchema = new Schema({
  value: String,
  price: Number,
  username: String,
  children: [child],
});

export const treedb = model("trees", treeSchema);
