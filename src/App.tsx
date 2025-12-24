// src/App.tsx

import { useState, useEffect } from "react";
import LoadingScreen from "./components/special/Loading";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/layout/Home";
import Community from "./components/layout/Community";
import Team from "./components/layout/Team";
import OpenSea from "./components/layout/OpenSea";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000); // مدت نمایش لودینگ

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <LoadingScreen /> 

    <Routes>
      {/* =======Main Pages===== */}
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/team" element={<Team />} />
        <Route path="/opensea" element={<OpenSea />} />

        {/* =======Blog===== */}
        <Route path="/stonelookclub.io" />
      </Routes>
    </>
  );
}

export default App;
