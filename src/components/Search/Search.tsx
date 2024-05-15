"use client";

import React from "react";
import background from "@/assets/bg-pattern-detail-footer.svg";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get("title") || "";
  const location = searchParams.get("location") || "";

  const onInputChange = () => {};
  return (
    <div className={`flex flex-col gap-4 py-8 max-w-screen-lg m-auto`}>
      <Image
        src={background}
        className="w-full absolute top-0 left-0 object-cover h-[150px] -z-10 rotate-360"
        alt="Picture of the author"
      />
      <div className="flex items-center justify-between ">
        <div>devjobs</div>
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-sun"></i>
          <i className="fa-solid fa-moon"></i>
        </div>
      </div>
      <div className="flex w-full rounded-md  bg-white">
        <div className="flex gap-3 border-r-[1px] items-center p-4 px-4">
          <i className="fa-brands fa-searchengin text-primary"></i>
          <input
            onChange={onInputChange}
            className=" h-full outline-none"
            type={"text"}
            placeholder="Filter by title"
          />
        </div>
        <div className="flex gap-3 items-center p-4 border-r-[1px] px-4">
          Location
          <input
            onChange={onInputChange}
            className="h-full outline-none"
            type={"text"}
            placeholder="Filter by location"
          />
        </div>
        <div className="flex gap-3 p-4 w-full border-r-[1px] items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <input
              onChange={onInputChange}
              className="outline-none h-full"
              type={"checkbox"}
              placeholder="Filter by title"
            />
            <div>Full time only</div>
          </div>
          <button className="bg-primary p-2 px-3 rounded-lg text-white">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
