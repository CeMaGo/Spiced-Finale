import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-sky-700 to-slate-800">
      <div className="bg-scroll m-auto bg-stone-100 rounded-md w-4/5  grid ">
        <div className=" flex-row justify-evenly">
          <div className="text-center ">{children}</div>
        </div>
      </div>
    </div>
  );
}
