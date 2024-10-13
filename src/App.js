import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Suspense } from "react";
import AuthRoutes from "./routes/AuthRoutes";
import UnAuthRoutes from "./routes/UnAuthRoutes";

const App = () => {
  return (
    <>
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>
          {AuthRoutes}
          {UnAuthRoutes}
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
