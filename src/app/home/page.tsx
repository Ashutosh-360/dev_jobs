"use client";
import Search from "@/components/Search/Search";
import { NextApiResponse } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GetData } from "../lib/API";

interface Job {
  company_name: string;
  job_designation: string;
  job_type: [string];
  minimum_pay: number;
  maximum_pay: number;
  location: [string];
  company_description: string;
  job_description: string;
  skills: [string];
}
function page() {
  const [jobData, setJobData] = useState<Job[]>([]);

  useEffect(() => {
    GetData("api/job_list", { limit: 5 }, getJobDataHandler);
  }, []);

  const getJobDataHandler = (response: any) => {
    setJobData(response.data.results);
  };
  return (
    <div className="w-full">
      <Search />
      <div className="w-full max-w-screen-lg grid grid-cols-3 gap-2 m-auto">
        {jobData?.map((ele: Job, index: number) => {
          return (
            <Link href={""} key={index} className="w-full border p-4 bg-white rounded-md">
              <div className="w-full flex items-center gap-2">
                <div className="">5h ago</div>
                <div>*</div>
                <div>{ele.job_type}</div>
              </div>
              <div>{ele.job_designation}</div>
              <div>{ele.company_name}</div>
              <div className="mt-3">{ele?.location?.join(",")}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default page;
