import React, { ReactNode } from "react";
import Navigation from "../Navigation";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default MainLayout;
