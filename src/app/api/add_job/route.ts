import { connectDb } from "@/app/lib/connectDB";
import Job from "@/models/Job";
import { NextRequest, NextResponse } from "next/server";
import cloudinary from "cloudinary";
import { readFile } from "fs";

connectDb();
cloudinary.v2.config({
  cloud_name: "dkc5pkj9d",
  api_key: "628293962455536",
  api_secret: "ELgUUYn10W29OkZOt8Bek-fbhhU",
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const companyImageFile =await readFile(companyImageFile.path);
    await cloudinary.v2.uploader
      .unsigned_upload(companyImageFile, "media_preset")
      .then((result) => console.log(result))
      .catch((error) => console.log(error));

    return
    let jobData = {
      ...bodyData,
      ["company_image"]: "",
    };
    jobData = new Job(bodyData);

    console.log(jobData, "d");

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
