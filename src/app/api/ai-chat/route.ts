import { connectDB } from "@/lib/db";
import { Group } from "@/models/Group";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

export async function POST(req: Request) {
  try {
    await connectDB();
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "মেসেজ পাওয়া যায়নি" }, { status: 400 });
    }

    const dbContext = await Group.find().lean();
    const groupsInfo =
      dbContext.length > 0
        ? dbContext
            .map((g: any) => `নাম: ${g.title}, বর্ণনা: ${g.description}`)
            .join("\n")
        : "কোনো গ্রুপ পাওয়া যায়নি।";

    const model = genAI.getGenerativeModel(
      { model: "gemini-2.5-flash" },
      { apiVersion: "v1beta" },
    );

    const prompt = `
      তুমি "শান্তি-হাব" এর অ্যাসিস্ট্যান্ট। 
      তথ্য: ${groupsInfo}
      ইউজারের প্রশ্ন: ${message}
      বাংলায় উত্তর দাও।
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error: any) {
    console.error("AI Error:", error.message);
    if (error.message.includes("429")) {
      return NextResponse.json(
        {
          error:
            "দুঃখিত, আমাদের ফ্রি লিমিট শেষ হয়ে গেছে। কিছুক্ষণ পর চেষ্টা করুন।",
        },
        { status: 429 },
      );
    }
    return NextResponse.json(
      { error: "AI কাজ করছে না", details: error.message },
      { status: 500 },
    );
  }
}
