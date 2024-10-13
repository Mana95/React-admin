import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

const ForGotPassword = () => {
  const forgotPasswordFormSchema = yup.object().shape({
    email: yup.string().email().required(),
  });
  const formOptions = { resolver: yupResolver(forgotPasswordFormSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  const onSubmitHandler = (event) => {
    console.log({ event });
    console.log("Check you inbox email has been sent");
    reset();
  };
  const navigate = useNavigate();

  const onClickRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">FORGOT PASSWORD</h3>
          <div className="form-group mt-3">
            <input
              type="email"
              {...register("email")}
              className={`form-control  
              mt-1 ${errors.email ? "is-invalid" : ""}`}
              placeholder="Enter email address"
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <p className="text-center mt-2">
              Back to <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForGotPassword;
