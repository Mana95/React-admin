import { Route } from "react-router-dom";
import MemberShipTable from "../views/Memberships/Membershiptable";
import Home from "../components/home/Home";

const AuthRoutes = [
  // <Route
  //   key="ProtectedHome"
  //   path="/"
  //   element={<AuthGuard component={<Home />} />}
  // />,
  <Route
    key="Member-table"
    path="/member-table"
    element={<MemberShipTable />}
  />,
  <Route key="home" path="/home" element={<Home />} />,
];

export default AuthRoutes;
