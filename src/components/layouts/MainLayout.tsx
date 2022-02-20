import React, { ReactNode } from "react";
import Navigation from "../Navigation";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full h-screen">
      <div className="max-w-sm w-full flex-shrink">
        <Navigation />
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default MainLayout;
