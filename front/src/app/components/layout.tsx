import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-row-reverse w-full h-screen">
        <div className=" lg:flex h-full w-2/3 items-center justify-center relative"></div>
        <div
          className="w-full flex  justify-center lg:w-1/3"
          style={{ marginTop: "152px" }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
