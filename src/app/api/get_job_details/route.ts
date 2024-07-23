import { connectDb } from "@/app/lib/connectDB";
import Job from "@/models/Job";
import { NextRequest, NextResponse } from "next/server";

connectDb();

export async function GET(request: NextRequest) {
  try {
    let query = request.nextUrl.searchParams;
    let job_id = query.get("id");

    const jobDetails = await Job.findById(job_id);

    return NextResponse.json({
      success: "true",
      results: jobDetails,
    });
  } catch (error) {
    return NextResponse.json({
      success: "false",
      info: error,
    });
  }
}
