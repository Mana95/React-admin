import { Route } from "react-router-dom";
import NotFound from "../views/NotFound";
import AuthGuard from "../guards/AuthGuard";
import MemberShipTable from "../views/Memberships/Membershiptable";

const AuthRoutes = [
  <Route
    key="ProtectedHome"
    path="/"
    element={<AuthGuard component={<NotFound />} />}
  />,
  <Route
    key="Member-table"
    path="/member-table"
    element={<AuthGuard component={<MemberShipTable />} />}
  />,
];

export default AuthRoutes;
