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

    
    const user = await User.findOne({ email: session.user?.email });
    if (user.joinedGroups.includes(groupId)) {
      return NextResponse.json({ message: "Already a member" }, { status: 400 });
    }

    
    user.joinedGroups.push(groupId);
    await user.save();

  
    await Group.findByIdAndUpdate(groupId, { $inc: { membersCount: 1 } });

    return NextResponse.json({ message: "Successfully joined!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Joining failed" }, { status: 500 });
  }
}