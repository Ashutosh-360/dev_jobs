import { timeStamp } from "console";
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
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

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);

export default Job;
