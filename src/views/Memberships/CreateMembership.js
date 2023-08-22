import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const CreateMembership = () => {
//   const membershipFormSchema = yup.ObjectSchema().shape({
//     membershipId: yup.string().required(),
//     membershipType: yup.string().required("Membership Type is required!"),
//     FirstName: yup.string().required("First name is required!"),
//     lastName: yup.string().required("Last name is required!"),
//     amountOfMembership: yup.string().required("Amount is required!"),
//     email: yup.string().email().required(),
//     gender: yup.string().required("Gender is required!"),
//     address: yup
//       .array()
//       .of(
//         yup.object({
//           city: yup.string().min(4).required(),
//           streetName: yup.string().min(4).required("Street Name is required"),
//           town: yup.string().min(4).required(),
//         })
//       )
//       .required(),
//   });
//   const formOptions = { resolver: yupResolver(membershipFormSchema) };
//   const { register, handleSubmit, reset, formState } = useForm(formOptions);
//   const { errors } = formState;

//   const onSubmitHandler = (event) => {
//     console.log({ event });
//     reset();
//   };
  return (
    <div className="card mb-8">
        <div className="card-body table-responsive">
        <div className="col-md-12">
        <div className="card bg-light mb-2">
        <div className="card-header">
          <h2><b>
             <i className="fa fa-handshake-o" aria-hidden="true"></i>
             New Membership
            </b></h2>
        </div>
        <div class="card-body">
    <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>
</div>
</div>
</div>
</div>
</div>
  )
  
};


export default CreateMembership;