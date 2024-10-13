import { Route } from "react-router-dom";
import UnAuthGuard from "../guards/UnAuthGuard";
import Login from "../components/Access/Login";
import Register from "../components/Access/Register";
import Membershiptable from "../views/Memberships/Membershiptable";
import Viewmembership from "../views/Memberships/Viewmember";

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
    key="Membertable"
    path="/membertable"
    element={<UnAuthGuard component={<Membershiptable />} />}
  />,
  <Route
    key="ViewMember"
    path="/viewmember"
    element={<UnAuthGuard component={<Viewmembership />} />}
  />,
];

export default UnAuthRoutes;
