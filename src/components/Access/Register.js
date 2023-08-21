import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from 'react-hook-form';
const Register = ()=>{
    const registerFormSchema = yup.object().shape({
        firstName: yup.string().required('First Name is mandatory'),
        lastName:yup.string().required('Last Name is mandatory'),
        email: yup.string().email().required(),
        password: yup.string().required('Password is mendatory')
        .min(8, 'Password must be at 8 char long'),
        confirmPwd: yup.string()
        .required('Password is mendatory')
        .oneOf([yup.ref('password')], 'Passwords does not match'),
      });
   const formOptions = { resolver: yupResolver(registerFormSchema) }
   const { register, handleSubmit, reset, formState } = useForm(formOptions)
   const { errors } = formState
      const onSubmitHandler = (event)=>{
        console.log({ event });
        reset();
      }

      const onClickRedirect = ()=>{
        console.log('hellp');
      }

    return (
       <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
           Already have an account?{" "}
            <span
              className="link-primary form-control"
              onClick={onClickRedirect}
            >
              Sign in
            </span>
          </div>
          <div className="form-group mt-3">
            <label>First name </label>
            <input
              type="text"
              {...register("firstName")}
              placeholder="Enter First Name"
              className={`form-control  
              mt-1 ${errors.firstName ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">{errors.firstName?.message}</div>
          </div>
          <div className="form-group mt-3">
            <label>Last name</label>
            <input
              type="text"
              {...register("lastName")}
              className={`form-control  
              mt-1 ${errors.lastName ? 'is-invalid' : ''}`}
              placeholder="Enter Last name"

            />
           <div className="invalid-feedback">{errors.lastName?.message}</div>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              {...register("email")}
              className={`form-control  
              mt-1 ${errors.email ? 'is-invalid' : ''}`}
              placeholder="Enter email"
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              {...register('password')}
              className={`form-control mt-1 ${errors.password ? 'is-invalid' : ''}`}
              placeholder="Enter password"
            />
         <div className="invalid-feedback">{errors.password?.message}</div>
          </div>
          <div className="form-group mt-3">
            <label>Confirm  Password</label>
            <input
           type="password"
           {...register('confirmPwd')}
           className={`form-control mt-1 ${errors.confirmPwd ? 'is-invalid' : ''}`}
            placeholder="Confirm the password"
            />
       <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    )
}

export default Register;