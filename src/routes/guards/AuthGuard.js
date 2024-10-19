import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import BaseLayout from "../BaseLayout";
const AuthGuard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Assume this function checks if the user is logged in
    const isAuthenticated = () => {
      // Replace with actual authentication check
      return !!localStorage.getItem("authToken");
    };

    if (!isAuthenticated()) {
      console.log("User not authenticated, redirecting to login");
      navigate("/login"); // Redirect to login page if not authenticated
    }
  }, [navigate]);

  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
};

export default AuthGuard;
