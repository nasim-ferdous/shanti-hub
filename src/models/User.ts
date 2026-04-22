import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    alias: { type: String },
    avatar: { type: String },

    joinedGroups: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group",
      },
    ],
  },
  {
    timestamps: true,
    collection: "shanti_users",
  },
);

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
