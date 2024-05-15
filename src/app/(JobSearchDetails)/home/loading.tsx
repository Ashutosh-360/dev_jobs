import React from "react";

function loading() {
  return (
    <div className="w-full max-w-screen-lg grid grid-cols-3 gap-2 m-auto py-6 animate-pulse">
      {[...Array(6)].map((item, idx) => {
        return (
          <div key={idx} className="bg-white border rounded-lg flex flex-col gap-4 p-6">
            <div className="w-full rounded-lg dark:bg-slate-500 bg-slate-200 h-2"></div>
            <div className="w-5/6 rounded-lg dark:bg-slate-500 bg-slate-200 h-2"></div>
            <div className="w-3/6 rounded-lg dark:bg-slate-500 bg-slate-200 h-2"></div>
          </div>
        );
      })}
    </div>
  );
}

export default loading;
