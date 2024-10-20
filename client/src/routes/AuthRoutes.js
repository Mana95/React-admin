import { Route } from "react-router-dom";
import MemberShipTable from "../views/Memberships/Membershiptable";
import Home from "../views/home/Home";

const AuthRoutes = [
  <Route
    key="Member-table"
    path="/member-table"
    element={<MemberShipTable />}
  />,
  <Route key="" path="/" element={<Home />} />,
  <Route key="home" path="/home" element={<Home />} />,
];

export default AuthRoutes;
