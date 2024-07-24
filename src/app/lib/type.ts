import { ObjectId } from "mongoose";

export interface JobType {
  _id: ObjectId;
  createdAt: any;
  company_name: string;
  job_designation: string;
  job_type: [string];
  minimum_pay: number;
  maximum_pay: number;
  location: [string];
  company_description: string;
  job_description: string;
  skills: [string];
  company_image: string;
}
