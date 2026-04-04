import { connectDB } from "@/lib/db";
import { Message } from "@/models/Message";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import mongoose from "mongoose"; // এটি যোগ করুন

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { groupId, text } = await req.json();

    // টেক্সট বা গ্রুপ আইডি না থাকলে এরর দিবে
    if (!groupId || !text) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await connectDB();

    const user = session.user as any;

    const newMessage = await Message.create({
      groupId: new mongoose.Types.ObjectId(groupId),
      senderId: new mongoose.Types.ObjectId(user.id),
      senderAlias: user.name,
      senderAvatar: user.image,
      text,
    });

    return NextResponse.json(newMessage, { status: 201 });
  } catch (error: any) {
    console.error("DETAILED_ERROR:", error); // এটি টার্মিনালে আসল এরর দেখাবে
    return NextResponse.json(
      { error: error.message || "Failed to send message" },
      { status: 500 },
    );
  }
}
