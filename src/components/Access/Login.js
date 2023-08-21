import { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const Login = () => {
  let [authMode, setAuthMode] = useState("signin");

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <span
              className="link-primary form-control"
              onClick={changeAuthMode}
            >
              Sign Up
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              {...register("email")}
              className="form-control mt-1"
              placeholder="Enter email"
            />
            <p>{errors.email?.message}</p>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              {...register("password")}
              className="form-control mt-1"
              placeholder="Enter password"
            />
            <p>{errors.password?.message}</p>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
