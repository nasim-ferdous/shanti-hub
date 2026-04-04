import mongoose from "mongoose";

const GroupSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true }, // e.g., Anxiety, Meditation, Student Life
    image: { type: String }, // Unsplash Image Link
    membersCount: { type: Number, default: 0 },
    tags: [String],
    slug: { type: String, unique: true }, // URL এর জন্য (e.g., /explore/anxiety-support)
  },
  { 
    timestamps: true,
    collection: "shanti_groups" // আপনার পছন্দের ফরম্যাট অনুযায়ী
  }
);

export const Group = mongoose.models.Group || mongoose.model("Group", GroupSchema);