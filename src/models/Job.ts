import mongoose, { Document, Model, Schema } from "mongoose";

// Define the TypeScript interface for the Job document
interface IJob extends Document {
  company_name: string;
  company_image: string;
  job_designation: string;
  job_type: string[];
  minimum_pay: number;
  maximum_pay: number;
  location: string[];
  company_description: string;
  job_description: string;
  skills: string[];
}

// Define the Mongoose schema with TypeScript
const jobSchema: Schema<IJob> = new mongoose.Schema(
  {
    company_name: {
      type: String,
      required: true,
      default: "",
    },
    company_image: {
      type: String,
      default: "",
    },
    job_designation: {
      type: String,
      required: true,
    },
    job_type: {
      type: [String],
      required: true,
      default: [],
    },
    minimum_pay: {
      type: Number,
      default: 0,
    },
    maximum_pay: {
      type: Number,
      default: 0,
    },
    location: {
      type: [String],
      required: true,
      default: [],
    },
    company_description: {
      type: String,
      default: "",
    },
    job_description: {
      type: String,
      default: "",
    },
    skills: {
      type: [String],
      required: true,
      default: [],
    },
  },
  { timestamps: true, versionKey: false }
);

// Define the Mongoose model with TypeScript
const Job: Model<IJob> = mongoose.models.Job || mongoose.model<IJob>("Job", jobSchema);

export default Job;
