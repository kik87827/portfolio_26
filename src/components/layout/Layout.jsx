import React, { useRef } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  const headerRef = useRef(null);
  return (
    <div className="page-wrap">
      <Header ref={headerRef} />
      <Outlet context={{ headerRef }} />
      <Footer />
    </div>
  );
};

export default Layout;
