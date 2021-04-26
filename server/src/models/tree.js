import { model, Schema } from "mongoose";

const treeSchema = new Schema({
  id: String,
  value: String,
  price: Number,
  username: String,
  parent: String,
  children: [],
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

export const treedb = model("trees", treeSchema);
