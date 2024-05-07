import { connectDb } from "@/app/lib/connectDB";
import Job from "@/models/Job";
import { NextRequest, NextResponse } from "next/server";

connectDb();
export async function POST(req: NextRequest) {
  try {
    const bodyData = await req.json();

    const jobData = new Job(bodyData);
    const savedData = await jobData.save();

    return NextResponse.json({
      success: "true",
      results: savedData,
    });
  } catch (error) {
    return NextResponse.json({
      success: "false",
      results: [],
      info: error,
    });
  }
}
