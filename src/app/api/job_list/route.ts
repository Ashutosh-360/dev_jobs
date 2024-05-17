import { connectDb } from "@/app/lib/connectDB";
import Job from "@/models/Job";
import { NextRequest, NextResponse } from "next/server";

connectDb();
export async function GET(req: NextRequest) {
  try {
    let query = req.nextUrl.searchParams;
    const limit = Number(query.get("limit")) || 3;
    const page = Number(query.get("page")) || 1;

    const job_designation = query.get("job_designation");
    const location = query.get("location");
    const is_full_time = query.get("is_full_time");

    let searchQuery: { [key: string]: any } = {};
    if (job_designation) {
      searchQuery.job_designation = { $regex: job_designation, $options: "i" };
    }

    if (location) {
      searchQuery.location = { $regex: location, $options: "i" };
    }

    if (is_full_time == "true") {
      searchQuery.job_type = { $regex: "full-time", $options: "i" };
    }

    const count = await Job.countDocuments(searchQuery);
    const jobData = await Job.find(searchQuery)
      .limit(limit)
      .skip((page - 1) * limit);

    return NextResponse.json({
      success: "true",
      results: jobData,
      total_pages: Math.ceil(count / limit),
      count,
    });
  } catch (error) {
    return NextResponse.json({
      success: "false",
      results: [],
      info: error,
    });
  }
}
