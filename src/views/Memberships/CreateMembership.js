import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm, useFieldArray } from "react-hook-form";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreateMembership = () => {
  const [inputAddress, setInputAddress] = useState([]);

  const membershipFormSchema = yup.object().shape({
    membershipId: yup.string().required("Membership Id is required! "),
    membershipName: yup.string().required("Membership name is required!"),
    FirstName: yup.string().required("First name is required!"),
    lastName: yup.string().required("Last name is required!"),
    email: yup.string().email().required(),
    gender: yup.string().required("Gender is required!"),
    contactNumber: yup.string().required(),
    addresses: yup
      .array()
      .of(
        yup.object({
          city: yup.string().min(4 , 'City must be at least 4 characters').required("City is required"),
          streetName: yup.string().min(4, 'Street Name must be at least 4 characters').required("Street Name is required"),
          town: yup.string().min(4, 'Town must be at least 4 characters').required("town is required"),
        })
      )
      .required(),
    dateOfBirth: yup.string().required(),
    userId: yup.string().required(),
    amountOfMembership: yup.string().required("Amount is required!"),
    bmiType:yup.string.required()
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const formOptions = {
    resolver: yupResolver(membershipFormSchema),
    defaultValues: {
      addresses: [],
    },
  };
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    control,
    formState,
    getValues,
  } = useForm(formOptions);
  const { errors } = formState;

  const onSubmitHandler = (event) => {
    console.log({ event });
    reset();
  };

  const addAddress = () => {
    const currentAddresses = getValues("addresses");
    setValue("addresses", [
      ...currentAddresses,
      { city: "", streetName: "", town: "" },
    ]);

    console.log(getValues("addresses"));
  };

  const removeAddress = (index) => {
    remove(`address.${index}`);
  };

  const numbersOfAddress = watch("addresses");

  const { fields, append, remove } = useFieldArray({
    control,
    name: "addresses",
  });

  const getMethod = (event) => {
    console.log(event);
    return "hellopw";
  };

  return (
    <>
      <div className="card mb-8">
        <div className="card-body table-responsive">
          <div className="col-md-12">
            <div className="card bg-light mb-2">
              <div className="card-header">
                <h2>
                  <b>
                    <i className="fa fa-handshake-o" aria-hidden="true"></i>
                    New Membership
                  </b>
                </h2>
              </div>
              <div className="card-body">
                <form
                  className="row g-3"
                  onSubmit={handleSubmit(onSubmitHandler)}
                >
                   <h3><b> <FontAwesomeIcon icon="fa-brands fa-twitter" /> Personal information</b></h3>
                   <hr/>
                  <div className="col-md-3">
                    <label htmlFor="membershipId" className="form-label">
                      Membership Id
                    </label>
                    <input
                      type="text"
                      {...register("membershipId")}
                      className={`form-control mt-1 ${
                        errors.membershipId ? "is-invalid" : ""
                      }`}
                      id="membershipId"
                    />
                    <div className="invalid-feedback">
                      {errors.membershipId?.message}
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="membershipId" className="form-label">
                      Membership Name
                    </label>
                    <input
                      type="text"
                      {...register("membershipName")}
                      className={`form-control mt-1 ${
                        errors.membershipName ? "is-invalid" : ""
                      }`}
                      id="membershipName"
                    />
                    <div className="invalid-feedback">
                      {errors.membershipName?.message}
                    </div>
                  </div>
                  <div className="col-3">
                    <label htmlFor="FirstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      {...register("FirstName")}
                      className={`form-control mt-1 ${
                        errors.FirstName ? "is-invalid" : ""
                      }`}
                      id="FirstName"
                      placeholder="Enter your first name"
                    />
                    <div className="invalid-feedback">
                      {errors.FirstName?.message}
                    </div>
                  </div>
                  <div className="col-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      {...register("lastName")}
                      className={`form-control mt-1 ${
                        errors.lastName ? "is-invalid" : ""
                      }`}
                      id="lastName"
                      placeholder="Enter your last name"
                    />
                    <div className="invalid-feedback">
                      {errors.lastName?.message}
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      className={`form-control  
              mt-1 ${errors.email ? "is-invalid" : ""}`}
                      placeholder="Enter email"
                    />
                    <div className="invalid-feedback">
                      {errors.email?.message}
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="inputState" className="form-label">
                      Gender
                    </label>
                    <select
                      id="inputState"
                      {...register("gender")}
                      className={`form-control  
                      mt-1 ${errors.gender ? "is-invalid" : ""}`}
                    >
                      <option defaultChecked value={1}>
                        Male
                      </option>
                      <option value={2}>Female</option>
                      <option value={3}>Other</option>
                    </select>
                    <div className="invalid-feedback">
                      {errors.gender?.message}
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="contactNumber" className="form-label">
                      Contact Number
                    </label>
                    <input
                      {...register("contactNumber")}
                      className={`form-control mt-1 ${
                        errors.contactNumber ? "is-invalid" : ""
                      }`}
                      type="text"
                      id="gridCheck"
                    />
                    <div className="invalid-feedback">
                      {errors.contactNumber?.message}
                    </div>
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="dateOfBirth" className="form-label">
                      Birth
                    </label>
                    <input
                      {...register("dateOfBirth")}
                      className={`form-control mt-1 ${
                        errors.userId ? "is-invalid" : ""
                      }`}
                      type="date"
                      id="dateOfBirth"
                    />
                    <div className="invalid-feedback">
                      {errors.dateOfBirth?.message}
                    </div>
                  </div>

                  <div className="col-md-1">
                    <label htmlFor="userId" className="form-label">
                      User Key
                    </label>
                    <input
                      {...register("userId")}
                      className={`form-control mt-1 ${
                        errors.userId ? "is-invalid" : ""
                      }`}
                      type="text"
                      id="userId"
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <h4 className="jumbotron text-left">
                        <b>Address </b>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={addAddress}
                        >
                          <b>+</b>
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={removeAddress}
                        >
                          <b>-</b>
                        </button>
                      </h4>
                    </div>
                  </div>
                    
                  {getValues("addresses") &&
                    getValues("addresses").map((_, index) => (
                     <>
                        <div className="col-md-4">
                        <Controller
                          name='City'
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <>
                              <label
                                htmlFor={index + field}
                                className="form-label"
                              >
                                City Name
                              </label>
                              <input
                                type="text"
                                {...field}
                                className={`form-control mt-1 ${errors.addresses && errors.addresses[index]?.city ? "is-invalid" : ""}`}
                                placeholder={"Enter City name"}
                              />
                        {errors.addresses && errors.addresses[index]?.city && (
                        <div className="invalid-feedback">
                          {errors.addresses[index]?.city.message}
                        </div>
                      )}
                              </>
                          )}
                        />
                        </div>
                        <div className="col-md-4">
                        <Controller
                          name={`addresses[${index}].town`}
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                              <>
                                <label
                                  htmlFor={index + field}
                                  className="form-label"
                                >
                                  Town Name
                                </label>
                                <input
                                  name={`addresses[${index}].city`}
                                  type="text"
                                  {...field}
                                  className={`form-control mt-1 ${errors.addresses && errors.addresses[index]?.town ? "is-invalid" : ""}`}
                                  placeholder={"Town name"}
                                />
                      {errors.addresses && errors.addresses[index]?.town && (
                        <div className="invalid-feedback">
                          {errors.addresses[index]?.town.message}
                        </div>
                      )}
                              </>
                          )}
                        />
                        </div>
                        <div className="col-md-4">
                        <Controller
                         name={`addresses[${index}].streetName`}
                          control={control}
                          render={({ field }) => (
                              <>
                                <label
                                  htmlFor={index + field}
                                  className="form-label"
                                >
                                  Town Name
                                </label>
                                <input
                                  type="text"
                                  {...field}
                                  className={`form-control mt-1 ${errors.addresses && errors.addresses[index]?.streetName ? "is-invalid" : ""}`}
                                  placeholder={"Street name"}
                                />
                                {errors.addresses && errors.addresses[index]?.streetName && (
                                  <div className="invalid-feedback">
                                    {errors.addresses[index]?.streetName.message}
                                  </div>
                                )} 
                              </>
                          )}
                        />
                        
                        </div>
                        </>
                    ))}
<hr/>
          <div className="form-row">
  <h3><b> <FontAwesomeIcon icon="fa-brands fa-twitter" /> Body measurements</b></h3>
  <hr/>  
        <div className="form-row">
                <div className="form-group col-md-12">
                <h4 className="jumbotron text-center"><b>BMI Calculation</b></h4>
                </div>
            </div>

          </div>


                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateMembership;
