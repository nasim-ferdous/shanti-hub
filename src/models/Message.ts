import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    groupId: { type: mongoose.Schema.Types.ObjectId, ref: "Group", required: true },
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    senderAlias: { type: String, required: true },
    senderAvatar: { type: String },
    text: { type: String, required: true },
  },
  { 
    timestamps: true,
    collection: "shanti_messages" 
  }
);

export const Message = mongoose.models.Message || mongoose.model("Message", MessageSchema);