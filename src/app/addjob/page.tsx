"use client";
import TokenField from "@/components/TokenField";
import { NextResponse } from "next/server";
import { useState } from "react";
import { PostData } from "../lib/API";

interface jobDataVariable {
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
function page() {
  const [jobTypeData, setJobTypeData] = useState<string[]>([]);
  const [locationData, setLocationData] = useState<string[]>([]);
  const [skillsData, setSkillsData] = useState<string[]>([]);

  const [jobData, setJobData] = useState<jobDataVariable>({
    company_name: "",
    company_image: "",
    job_designation: "",
    job_type: jobTypeData,
    minimum_pay: 0,
    maximum_pay: 0,
    location: locationData,
    company_description: "",
    job_description: "",
    skills: skillsData,
  });

  const addJobHandler = () => {
    jobData["job_type"] = jobTypeData;
    jobData["location"] = locationData;
    jobData["skills"] = skillsData;

    PostData("api/add_job", jobData, updateAddJobHandler);
  };

  const updateAddJobHandler = (response: any) => {
    if (response.data.success) {
      // window.location.reload();
    }
  };

  const onChangeHandler = (e: any) => {
    if (["minimum_pay", "maximum_pay"].includes(e.target.name)) {
      e.target.value = e.target.value.replace(/\D/g, "");
    }

    if (e.target.name === "company_image") {
      setJobData({ ...jobData, [e.target.name]: e.target.files[0] });
    } else {
      setJobData({ ...jobData, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="w-full flex flex-col gap-1">
        <label className="text-sm font-semibold" htmlFor="">
          Company Name
        </label>
        <input
          className="border outline-none rounded-md px-3 py-2"
          type={"text"}
          name="company_name"
          onChange={onChangeHandler}
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="text-sm font-semibold" htmlFor="">
          Company Logo
        </label>
        <input
          onChange={onChangeHandler}
          className="outline-none rounded-md  py-2"
          type={"file"}
          name="company_image"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="text-sm font-semibold" htmlFor="">
          Job Designation
        </label>
        <input
          onChange={onChangeHandler}
          className="border outline-none rounded-md px-3 py-2"
          type={"text"}
          name="job_designation"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="text-sm font-semibold" htmlFor="">
          Job type
        </label>
        <TokenField
          tokenFieldData={jobTypeData}
          setTokenFieldData={setJobTypeData}
          keyName={"job_type"}
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="text-sm font-semibold" htmlFor="">
          Minimum Pay
        </label>
        <input
          onChange={onChangeHandler}
          className="border outline-none rounded-md px-3 py-2"
          type={"text"}
          name="minimum_pay"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="text-sm font-semibold" htmlFor="">
          Maximum Pay
        </label>
        <input
          onChange={onChangeHandler}
          className="border outline-none rounded-md px-3 py-2"
          type={"text"}
          name="maximum_pay"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="text-sm font-semibold" htmlFor="">
          Location
        </label>
        <TokenField
          tokenFieldData={locationData}
          setTokenFieldData={setLocationData}
          keyName={"location"}
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="text-sm font-semibold" htmlFor="">
          Company Description
        </label>
        <textarea
          onChange={onChangeHandler}
          className="border outline-none rounded-md px-3 py-2"
          name="company_description"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="text-sm font-semibold" htmlFor="">
          Job Description
        </label>
        <textarea
          onChange={onChangeHandler}
          className="border outline-none rounded-md px-3 py-2"
          name="job_description"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="text-sm font-semibold" htmlFor="">
          Skills
        </label>
        <TokenField
          tokenFieldData={skillsData}
          setTokenFieldData={setSkillsData}
          keyName={"skills"}
        />
      </div>
      <button className="p-3 px-6 rounded text-white bg-primary w-fit" onClick={addJobHandler}>
        Add Job
      </button>
    </div>
  );
}

export default page;
