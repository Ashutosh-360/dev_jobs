function page() {
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
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="text-sm font-semibold" htmlFor="">
          Job Designation
        </label>
        <input
          className="border outline-none rounded-md px-3 py-2"
          type={"text"}
          name="job_designation"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="text-sm font-semibold" htmlFor="">
          Minimum Pay
        </label>
        <input
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
          className="border outline-none rounded-md px-3 py-2"
          type={"text"}
          name="maximum_pay"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="text-sm font-semibold" htmlFor="">
          Company Description
        </label>
        <textarea className="border outline-none rounded-md px-3 py-2" name="company_description" />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="text-sm font-semibold" htmlFor="">
          Job Description
        </label>
        <textarea className="border outline-none rounded-md px-3 py-2" name="job_description" />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="text-sm font-semibold" htmlFor="">
          Skills
        </label>
        <input className="border outline-none rounded-md px-3 py-2" type={"text"} name="skills" />
      </div>
    </div>
  );
}

export default page;
