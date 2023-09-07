import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "category",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    photo: {
      // photo can not be directly accessed ,it will assumed as the string Value
      data: Buffer, // for that reason we have to installed the package
      contentType: String,
    },
    shipping: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("products", productSchema);
