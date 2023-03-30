import React from "react";

export default function Layout({ children }) {
  return (
    // <div className="h-screen flex">
    <div className="flex min-h-window  bg-gradient-to-r from-sky-700 to-slate-800">
      <div className="m-auto bg-sky-50 rounded-md w-4/5 h-4/4 grid grid-flow-row">
        <div className=" flex flex-col justify-evenly">
          <div className="flex text-center p-2 ">{children}</div>
        </div>
      </div>
    </div>
    // </div>z
  );
}
