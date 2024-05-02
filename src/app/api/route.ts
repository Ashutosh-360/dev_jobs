import { NextResponse } from "../../../node_modules/next/server";
import { connectDb } from "../lib/connectDB";

connectDb();

export async function GET() {
  return NextResponse.json({
    hello: "world",
  });
}
