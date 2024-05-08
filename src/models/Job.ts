import { timeStamp } from "console";
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company_name: {
      type: String,
      required: true,
    },
    job_designation: {
      type: String,
      required: true,
    },
    job_type: {
      type: [String],
      required: true,
    },
    minimum_pay: {
      type: Number,
    },
    maximum_pay: {
      type: Number,
    },
    location: {
      type: [String],
      required: true,
    },
    company_description: {
      type: String,
    },
    job_description: {
      type: String,
    },
    skills: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);

export default Job;
