import { connectDb } from "@/app/lib/connectDB";
import Job from "@/models/Job";
import { NextRequest, NextResponse } from "next/server";

connectDb();
export async function GET(req: NextRequest) {
  try {
    let query = req.nextUrl.searchParams;
    let limit = query.get("limit");

    const jobData = await Job.find({});

    return NextResponse.json({
      success: "true",
      results: jobData,
    });
  } catch (error) {
    return NextResponse.json({
      success: "false",
      results: [],
      info: error,
    });
  }
}
