import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UnAuthGuard = ({ component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Assume this function checks if the user is logged in
    const isAuthenticated = () => {
      // Replace with actual authentication check
      return !!localStorage.getItem("authToken");
    };

    if (isAuthenticated()) {
      console.log("User already authenticated, redirecting to home");
      navigate("/"); // Redirect to home page if already authenticated
    }
  }, [navigate]);

  return <>{component}</>;
};

export default UnAuthGuard;
