"use client";
import Search from "@/components/Search/Search";
import React, { useEffect, useState } from "react";
import { GetData } from "../lib/API";

function page() {
  const [jobData, setJobData] = useState<[]>([]);

  useEffect(() => {
    GetData("api/job_list", {limit:5});
  }, []);

  return (
    <div className="w-full max-w-screen-lg m-auto">
      <Search />
      <div className="w-full max-w-screen-lg grid grid-cols-3 gap-2 m-auto">
        {[...Array(8)].map((ele: any, index: number) => {
          return (
            <div key={index} className="w-full border p-4 bg-white rounded-md">
              <div className="w-full flex items-center gap-2">
                <div className="">5h ago</div>
                <div>*</div>
                <div>Full time</div>
              </div>
              <div>Senior Developer</div>
              <div>company name</div>
              <div className="mt-3">United Kingdom</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default page;
