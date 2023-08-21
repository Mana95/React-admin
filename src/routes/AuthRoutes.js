import { Route } from "react-router-dom";
import NotFound from "../views/NotFound";
import AuthGuard from './../guards/AuthGuard';


const AuthRoutes = [
    <Route key="Welcome" path="/" element={<AuthGuard component={<NotFound />} />} />
];


export default AuthRoutes;