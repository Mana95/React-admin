import { Route } from "react-router-dom";
import UnAuthGuard from "../guards/UnAuthGuard";
import Login from "../components/Access/Login";
import Register from "../components/Access/Register";

const UnAuthRoutes = [
    <Route key="Login" path="/login" element={<UnAuthGuard component={<Login />} />} ></Route>,
    <Route key="Register" path="/register" element={<UnAuthGuard component={<Register />} />} > </Route>
];

export default UnAuthRoutes;