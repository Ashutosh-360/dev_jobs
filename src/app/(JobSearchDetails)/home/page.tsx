"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GetData } from "../../lib/API";
import Image from "next/image";
import { JobType } from "@/app/lib/type";
import formatJobTime from "@/app/lib/DateTimeFormat/formatJobTime.js";
import { useSearchParams } from "next/navigation";
function page() {
  const [jobData, setJobData] = useState<JobType[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    //direct api calling in useEffect will not load loader
    callFunc();
  }, [searchParams]);

  function callFunc() {
    let payload = {
      limit: 10,
      page: 1,
      job_designation: searchParams?.get("job_designation") || "",
      location: searchParams?.get("location") || "",
      is_full_time: searchParams?.get("is_full_time") || false,
    };
    GetData("api/job_list", payload, getJobDataHandler);
  }
  const getJobDataHandler = (response: any) => {
    setJobData(response.data.results);
  };
  return (
    <div className="w-full max-w-screen-lg grid grid-cols-3 gap-2 m-auto py-6">
      {jobData?.map((ele: JobType, index: number) => {
        return (
          <Link
            href={`/job_details/${ele._id}`}
            key={index}
            className="w-full relative p-4 py-10 border bg-white rounded-md"
          >
            <div className="w-full  flex items-center gap-2">
              <Image
                className="absolute top-0 -translate-y-1/2 rounded-full w-16 left-6  "
                width={100}
                height={100}
                src={ele?.company_image}
                alt={ele?.company_image}
              />
              <div className="">{formatJobTime(ele.createdAt)}</div>
              <div>*</div>
              <div>{ele.job_type}</div>
            </div>
            <div>{ele.job_designation}</div>
            <div>{ele.company_name}</div>
            <div className="mt-3">{ele?.location?.join(" , ")}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default page;
