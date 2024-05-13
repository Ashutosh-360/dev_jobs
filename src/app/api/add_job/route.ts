import { connectDb } from "@/app/lib/connectDB";
import Job from "@/models/Job";
import { NextRequest, NextResponse } from "next/server";
import { UploadApiErrorResponse, UploadApiResponse, v2 as cloudinary } from "cloudinary";
import { formDataToJson } from "@/app/lib/formDataToJSon";
connectDb();

cloudinary.config({
  cloud_name: "dkc5pkj9d",
  api_key: "628293962455536",
  api_secret: "ELgUUYn10W29OkZOt8Bek-fbhhU",
});
interface CloudinaryResults {
  secure_url: string;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const bodyData: Record<string, string | Blob> = formDataToJson(formData);

    const file = formData.get("company_image") as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    let cloudinaryResults: CloudinaryResults = await new Promise((resolve) => {
      cloudinary.uploader
        .upload_stream((error: UploadApiErrorResponse, result: UploadApiResponse) => {
          resolve(result);
        })
        .end(buffer);
    });

    bodyData.company_image = cloudinaryResults?.secure_url;
    let jobData = new Job(bodyData);

    const savedData = await jobData.save();

    return NextResponse.json({
      success: "true",
      results: savedData,
    });
  } catch (error) {
    return NextResponse.json({
      success: "false",
      results: {},
      info: error,
    });
  }
}
