import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["الصحة", "الرياضة", "الطقس", "الكوارث"],
    },
    writer: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
      trim: true,
    },
    likes: {
      type: [String], // ✅ مصفوفة من userId
      default: [],
    },
    isBreaking: {
      type: Boolean,
      default: false, // ✅ افتراضي مش عاجل
    },
  },
  { timestamps: true }
);

const News = mongoose.model("News", postSchema);
export default News;
