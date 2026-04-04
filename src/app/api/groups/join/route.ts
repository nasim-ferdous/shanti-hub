import { connectDB } from "@/lib/db";
import { Group } from "@/models/Group";
import { User } from "@/models/User";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { groupId } = await req.json();
    await connectDB();

    // ১. চেক করা ইউজার অলরেডি জয়েন করা কি না
    const user = await User.findOne({ email: session.user?.email });
    if (user.joinedGroups.includes(groupId)) {
      return NextResponse.json({ message: "Already a member" }, { status: 400 });
    }

    // ২. ইউজারের লিস্টে গ্রুপ অ্যাড করা
    user.joinedGroups.push(groupId);
    await user.save();

    // ৩. গ্রুপের মেম্বার কাউন্ট বাড়ানো
    await Group.findByIdAndUpdate(groupId, { $inc: { membersCount: 1 } });

    return NextResponse.json({ message: "Successfully joined!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Joining failed" }, { status: 500 });
  }
}