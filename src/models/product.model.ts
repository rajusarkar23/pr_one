//title
//description
//price
//image

import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  price: {
    type: String,
    required: [true, "Price is required"],
  },
  imageUrl: {
    type: String,
    required: [true, "Image url required"],
  },
  createdBy: {
    type: String,
    required: [true, "Created by is not defined."],
  },
});

export const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
