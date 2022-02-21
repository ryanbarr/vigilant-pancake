import React, { ReactNode } from "react";
import Navigation from "../Navigation";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full h-screen">
      <div>
        <Navigation />
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default MainLayout;
