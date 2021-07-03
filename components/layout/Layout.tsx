import React, { ReactNode } from "react";
import Navbar from "./navbar/navbar";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      {/* <Footer/> */}
    </>
  );
};

export default Layout;
