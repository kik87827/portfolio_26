import { useEffect } from "react";
import "./assets/css/style.css";
import commonInit from "./assets/js/ui_common";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import About from "./pages/About";
import Work from "./pages/Work";

function App() {
  useEffect(() => {
    commonInit();
  }, []);

  return (
    <>
      <Routes>
        {/* 헤더 필요한 그룹 */}
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/about" replace />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
