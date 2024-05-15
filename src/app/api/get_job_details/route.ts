import { connectDb } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

connectDb();

export async function GET() {
  try {
    return NextResponse.json({
      success: "true",
      results: {},
    });
  } catch (error) {
    return NextResponse.json({
      success: "false",
      info: error,
    });
  }
}
