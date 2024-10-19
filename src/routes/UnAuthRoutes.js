import { Route } from "react-router-dom";
import UnAuthGuard from "./guards/UnAuthGuard";
import Login from "../components/Access/Login";
import Register from "../components/Access/Register";
import ForGotPassword from "../components/Access/ForGotPassword";

const UnAuthRoutes = [
  <Route
    key="Login"
    path="/login"
    element={<UnAuthGuard component={<Login />} />}
  />,
  <Route
    key="Register"
    path="/register"
    element={<UnAuthGuard component={<Register />} />}
  />,
  <Route
    key="forgot-pw"
    path="/forgot-pw"
    element={<UnAuthGuard component={<ForGotPassword />} />}
  />,
];

export default UnAuthRoutes;
