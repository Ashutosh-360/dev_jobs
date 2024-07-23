"use client";
import { GetData } from "@/app/lib/API";
import { JobType } from "@/app/lib/type";
import { NextApiResponse } from "next";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";

interface Params {
  params: { id: string };
}

const page: FC<Params> = ({ params }) => {
  const [jobDetails, setJobDetails] = useState<JobType>();

  useEffect(() => {
    getDataFromApi();
  }, []);

  const getDataFromApi = () => {
    GetData("api/get_job_details", { id: params.id }, getJobDetailsHandler);
  };

  const getJobDetailsHandler = (response: any) => {
    setJobDetails(response.data.results);
  };
  return (
    <div className="max-w-screen-lg m-auto w-full flex flex-col gap-5">
      <div className="flex items-center gap-4">
        <Image
          className="rounded-full w-16"
          width={100}
          height={100}
          src={jobDetails?.company_image}
          alt={jobDetails?.company_image}
        />
        <div>
          <div className="text-lg font-semibold">{jobDetails?.job_designation}</div>
          <div className="">{jobDetails?.company_name}</div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            {jobDetails?.job_type[0]?.split(",").map((item: any) => {
              return (
                <div className="p-1 px-2 bg-green-700 text-sm rounded-md text-white">{item}</div>
              );
            })}
          </div>
          <div className="flex gap-1">
            {jobDetails?.location[0]?.split(",").map((item: any) => {
              return (
                <div className="p-1 px-2 bg-yellow-600 text-sm rounded-md text-white">{item}</div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <i className="fa-regular fa-credit-card text-lg"></i>
        {jobDetails?.minimum_pay / 100000 + "-" + jobDetails?.maximum_pay / 100000} Lpa
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold">Skills</div>
        <div className="flex items-center gap-1">
          {jobDetails?.skills[0].split(",")?.map((item: any) => {
            return (
              <div className="p-1 px-2 w-fit bg-sky-600 text-sm rounded-md text-white flex items-center gap-1">
                <i className="fa-regular fa-lightbulb"></i>
                {item}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div className="font-semibold">Job Description</div>
        <ul className="list-disc px-4">
          {jobDetails?.job_description.split("\n").map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold">About Company</div>
        <div>
          {jobDetails?.company_description.split("\n").map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
//
export default page;
