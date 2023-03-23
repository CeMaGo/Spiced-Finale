import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gradient-to-r from-sky-700 to-slate-800">
      <div className="m-auto bg-sky-50 rounded-md w-4/5 h-4/4 grid lg:grid-cols-2">
        {/* <div className={styles.imgStyle}>Images</div> */}

        <div className="right flex flex-col justify-evenly">
          <div className="text-center py-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
