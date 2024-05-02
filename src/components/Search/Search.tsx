import React from "react";

function Search() {
  return (
    <div className="flex flex-col gap-4 py-8">
      <div className="flex items-center justify-between">
        <div>devjobs</div>
        <div>Edit</div>
      </div>
      <div className="flex max-w-screen-lg m-auto bg-white">
        <div className="flex gap-1 border-r-[1px]">
          <i className="fa-brands fa-searchengin "></i>
          <input className="outline-none" type={"text"} placeholder="Filter by title" />
        </div>
        <div className="flex gap-1 border-r-[1px]">
          location
          <input className="outline-none" type={"text"} placeholder="Filter by location" />
        </div>
        <div className="flex gap-1 border-r-[1px]">
          <input className="outline-none" type={"checkbox"} placeholder="Filter by title" />
          <div>Full time only</div>
          <button className="bg-primary p-2 px-3 rounded-lg">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
