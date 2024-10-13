import "./Login.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const changeAuthMode = () => {
    navigate("/register");
  };

  const onSubmitHandler = (data) => {
    console.log({ data });
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">SIGN IN</h3>

          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              {...register("email")}
              className={`form-control  
                mt-1 ${errors.email ? "is-invalid" : ""}`}
              placeholder="Enter email"
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
            {/* <p className="invalid-feedback">{errors.email?.message}</p> */}
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              {...register("password")}
              className={`form-control  
                mt-1 ${errors.password ? "is-invalid" : ""}`}
              placeholder="Enter password"
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <div className="text-center">
              <small>
                <b>Not registered yet?</b>
              </small>
              <button
                className="link-primary form-control"
                onClick={changeAuthMode}
              >
                Sign Up
              </button>
            </div>
          </div>
          <p className="text-center mt-2">
            Forgot <Link to="/forgot-pw">password?</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
