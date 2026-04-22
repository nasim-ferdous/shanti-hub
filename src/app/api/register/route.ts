import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    await connectDB();

    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 },
      );
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const randomAlias = `Anonymous-${Math.floor(1000 + Math.random() * 9000)}`;

    // Unsplash থেকে র‍্যান্ডম অবতার (যাতে প্রতিবার আলাদা দেখায়)
    const randomAvatar = `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop`;

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      alias: randomAlias,
      avatar: randomAvatar,
    });

    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Registration failed" },
      { status: 500 },
    );
  }
}
