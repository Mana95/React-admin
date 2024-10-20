import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import { Suspense } from "react";
import AuthRoutes from "./routes/AuthRoutes";
import UnAuthRoutes from "./routes/UnAuthRoutes";
import { rootPath } from "./routes/RootPath"; // Correct usage for named exports
import AuthGuard from "./routes/guards/AuthGuard";

const App = () => {
  return (
    <>
      <Suspense fallback={<div className="container">Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path={rootPath} element={<Outlet />}>
              {UnAuthRoutes}
              <Route element={<AuthGuard />}>{AuthRoutes}</Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
