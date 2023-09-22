import { useForm, } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useFieldArray } from "react-hook-form";
import { useState } from "react";


const NewSupplier = () => {
    const [inputAddress, setInputAddress] = useState([]);

    const supplierFormSchema = yup.object().shape({
        supplierId: yup.string().required("supplier id is required"),
        firstName: yup.string().required("first name is required"),
        lastName: yup.string().required("last name is required"),
        email: yup.string().email().required("email is required"),
        password: yup.string().min(8, 'password at least 8 characters').required("password is required"),
        confirmpassword: yup.string().oneOf([yup.ref('password')], 'password does not match').required(" confirm password is required"),
        nicNumber: yup.string().required("NIC is required"),
        dob: yup.string().required("date of birth is required"),
        companyName: yup.string().required("company namr is required"),
        contactNumber: yup.string().required("contact number is required"),
        supplierCategoryType: yup.string().required("category type is requried"),
        addresses: yup
            .array()
            .of(
                yup.object({
                    city: yup.string().min(4, 'City must be at least 4 characters').required("City is required"),
                    streetName: yup.string().min(4, 'Street Name must be at least 4 characters').required("Street Name is required"),
                    town: yup.string().min(4, 'Town must be at least 4 characters').required("town is required"),
                })
            )
    });

    const formOptions = {
        resolver: yupResolver(supplierFormSchema),
        defaultValues: {
            addresses: [],
        },
    };

    const {
        register,
        formState,
        control,
        reset,
        watch,
        getValues,
        setValue,
        handleSubmit,

    } = useForm(formOptions);
    const { errors } = formState;

    const onSubmitHandler = (event) => {
        console.log({ event });
        reset();
    }

    const addAddress = () => {
        const currentAddresses = getValues("addresses");
        setValue("addresses", [...currentAddresses,
        { city: "", streetName: "", town: "" }
        ]);
        console.log(getValues("addresses"));
    };

    const removeAddress = (index) => {
        remove(`address.${index}`);
    }

    const numbersOfAddress = watch("addresses");

    const { fields, append, remove } = useFieldArray({
        control,
        name: "addresses",
    });

    const getMethod = (event) => {
        console.log(event);
        return "hellow";
    };

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }


    return (

        <div className="card mb-8">
            <div className="card-body ">
                <div className="col-md-12">
                    <div className="card bg-light mb-2">
                        <div className="card-header">
                            <h2>
                                <b>
                                    <i className="fa fa-handshake-o" aria-hidden="true"></i>
                                    Supplier New Record
                                </b>
                            </h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmitHandler)}>
                                <div className="row">
                                    <div className="col-md-4"></div>
                                    <div className="col-md-4">
                                        <center>
                                            <div className="form-row mt-3 mb-3">
                                                <h2>Add Profile Image:</h2>
                                                <img src={file} className="profile-img" />
                                                <input type="file" className="form-control" onChange={handleChange} />
                                            </div>
                                            
                                        </center>
                                    </div>
                                    <div className="col-md-4"></div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-row mt-3">
                                            <label htmlFor="supplierId" className="form-label">Suplier Id</label>
                                            <input type="text" {...register("supplierId")}
                                                className={`form-control mt-1 ${errors.supplierId ? "is-invalid" : ""
                                                    }`} id="supplierId" />
                                            <div className="invalid-feedback">{errors.supplierId?.message}</div>
                                        </div>

                                        <div className="form-row mt-3">
                                            <label htmlFor="firstName" className="form-label">First Name</label>
                                            <input type="text" {...register("firstName")}
                                                className={`form-control mt-1 ${errors.firstName ? "is-invalid" : ""
                                                    }`} id="firstName" />
                                            <div className="invalid-feedback">{errors.firstName?.message}</div>
                                        </div>

                                        <div className="form-row mt-3">
                                            <label htmlFor="lastName" className="form-label">Last Name</label>
                                            <input type="text" {...register("lastName")}
                                                className={`form-control mt-1 ${errors.lastName ? "is-invalid" : ""
                                                    }`} id="lastName" />
                                            <div className="invalid-feedback">{errors.lastName?.message}</div>
                                        </div>

                                        <div className="form-row mt-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" {...register("email")}
                                                className={`form-control mt-1 ${errors.email ? "is-invalid" : ""
                                                    }`} id="email" />
                                            <div className="invalid-feedback">{errors.email?.message}</div>
                                        </div>

                                        <div className="form-row mt-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input type="password" {...register("password")}
                                                className={`form-control mt-1 ${errors.password ? "is-invalid" : ""
                                                    }`} id="password" />
                                            <div className="invalid-feedback">{errors.password?.message}</div>
                                        </div>

                                        <div className="form-row mt-3">
                                            <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                                            <input type="password" {...register("confirmpassword")}
                                                className={`form-control mt-1 ${errors.confirmpassword ? "is-invalid" : ""
                                                    }`} id="confirmpassword" />
                                            <div className="invalid-feedback">{errors.confirmpassword?.message}</div>
                                        </div>

                                        <div className="form-row mt-3">
                                            <label htmlFor="nicNumber">NIC Number</label>
                                            <input type="text" {...register("nicNumber")}
                                                className={`form-control mt-1 ${errors.nicNumber ? "is-invalid" : ""
                                                    }`} id="nicNumber" />
                                            <div className="invalid-feedback">{errors.nicNumber?.message}</div>
                                        </div>

                                        <div className="form-row mt-3">
                                            <label htmlFor="dob">Date Of Birth</label>
                                            <input type="text" {...register("dob")}
                                                className={`form-control mt-1 ${errors.dob ? "is-invalid" : ""
                                                    }`} id="dob" />
                                            <div className="invalid-feedback">{errors.dob?.message}</div>
                                        </div>

                                        <div className="form-row mt-3">
                                            <label htmlFor="companyName">Company Name</label>
                                            <input type="text" {...register("companyName")}
                                                className={`form-control mt-1 ${errors.companyName ? "is-invalid" : ""
                                                    }`} id="companyName" />
                                            <div className="invalid-feedback">{errors.companyName?.message}</div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-row mt-3">
                                            <label htmlFor="contactNumber">Contact Number</label>
                                            <input type="text" {...register("contactNumber")}
                                                className={`form-control mt-1 ${errors.contactNumber ? "is-invalid" : ""
                                                    }`} id="contactNumber" />
                                            <div className="invalid-feedback">{errors.contactNumber?.message}</div>
                                        </div>

                                        <div className="form-row mt-3">
                                            <label htmlFor="firstName">Emergency Number</label>
                                            <input type="text" className="form-control" id="emergencyNumber" />
                                        </div>

                                        <div className="form-row mt-3">
                                            <label htmlFor="supplierCategoryType">Supplier Category Type</label>
                                            <input type="text" {...register("supplierCategoryType")}
                                                className={`form-control mt-1 ${errors.supplierCategoryType ? "is-invalid" : ""
                                                    }`} id="supplierCategoryType" />
                                            <div className="invalid-feedback">{errors.supplierCategoryType?.message}</div>
                                        </div>

                                        <div className="form-row mt-3">
                                            <label htmlFor="address">Address</label>
                                            <input type="text" {...register("address")}
                                                className={`form-control mt-1 ${errors.address ? "is-invalid" : ""
                                                    }`} id="address" />
                                            <div className="invalid-feedback">{errors.address?.message}</div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-12 mt-3">
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

                                        {getValues("address") && getValues("addresses").map((_, index) => (
                                            <>
                                                <div className="row">
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
                                                </div>
                                            </>
                                        ))}










                                        <div className="form-row mt-3">
                                            <label htmlFor="firstName">Company Address</label>
                                            <input type="text" className="form-control" id="companyAddress" />
                                        </div>

                                        <div className="form-row mt-3">
                                            <label htmlFor="firstName">Description</label>
                                            <textarea type="text" className="form-control" id="description" />
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-8"></div>
                                            <div className="col-md-4">
                                                <button type="submit" className="btn btn-primary btn-block w-100">
                                                    Sign in
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default NewSupplier;