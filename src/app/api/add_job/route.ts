import { connectDb } from "@/app/lib/connectDB";
import Job from "@/models/Job";
import { NextResponse } from "next/server";

connectDb();
export async function POST(req: Request, res: Response) {
  const jobData = new Job(req.body);

  jobData.save();

  return NextResponse.json({
    success: "true",
    results: jobData,
  });
}
