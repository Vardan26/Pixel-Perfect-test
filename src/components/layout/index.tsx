import React from "react";
import Header from "../header";
import { Footer } from "../footer";

const Layout = ({ children }) => {
  return (
    <div className="h-full w-full rounded-[16px] relative p-md overflow-hidden">
      <div className="h-1/2 bg-gradientTop absolute top-0 left-0 w-full"></div>
      <div className="relative z-1 h-full flex-col flex">
        <Header />
        <main className="flex-grow flex flex-col max-h-[calc(100%-120px)] overflow-auto relative z-10">
          {children}
        </main>
        <Footer />
      </div>
      <div className="h-1/2 bg-gradientBottom absolute bottom-0 left-0 w-full"></div>
    </div>
  );
};

export default Layout;
