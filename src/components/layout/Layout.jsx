import React, { useRef } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const headerRef = useRef(null);
  return (
    <>
      <Header ref={headerRef} />
      <main>
        <Outlet context={{ headerRef }} />
      </main>
    </>
  );
};

export default Layout;
