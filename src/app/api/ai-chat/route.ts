import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "মেসেজ পাওয়া যায়নি" }, { status: 400 });
    }

    // মডেল কল করার সময় 'gemini-1.5-flash' এর পরিবর্তে 'gemini-1.5-flash-8b' ট্রাই করছি
    // কারণ ৮বি ভার্সনটি অনেক বেশি স্টেবল এবং প্রায় সব রিজিয়নে কাজ করে
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
    });

    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);

    // যদি ৪MD৪ আসতেই থাকে, তবে আমরা বুঝব ওই মডেলটি আপনার কী-এর জন্য পারমিটেড না
    return NextResponse.json(
      {
        error: "AI রেসপন্স দিতে পারছে না",
        details: error.message,
      },
      { status: 500 }
    );
  }
}