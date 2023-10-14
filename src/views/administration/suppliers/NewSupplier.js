import { useForm,} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../ui/gym-input";
import InputField from "../../../ui/gym-input";
import { Validators } from "../../../ui/gym-input";

import React, {useState} from 'react';


const NewSupplier = () => {

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
        address: yup.string().required("address is required"),

    });

    const formOptions = {
        resolver: yupResolver(supplierFormSchema),
        defaultValues: {

        },
    };

    const {
        register,
        formState,
        reset,
        handleSubmit,

    } = useForm(formOptions);
    const { errors } = formState;

    const onSubmitHandler = (event) => {
        console.log({ event });
        reset();
    }

    const [value, setValue] = useState('');

    const handleChange = (value) => {
        console.log(value);
        setValue(value);
    };


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

                        <div className="container">
                        <InputField 
                                            value={value} 
                                            placeholder='test' 
                                            type='text' 
                                            label='Input Component' 
                                            validators={[
                                                {check: Validators.required, message: 'this field is required'}
                                            ]}
                                            onChange={handleChange}/> 

                        </div>
                        
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmitHandler)}>
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
                                        <center>
                                            <div className="form-row mt-3">
                                                
                                                <input type="file" className="form-control" id="customFile" />
                                            </div>
                                        </center>

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
                                            <label htmlFor="address">Private Address</label>
                                            <input type="text" {...register("address")}
                                                className={`form-control mt-1 ${errors.address ? "is-invalid" : ""
                                                    }`} id="address" />
                                            <div className="invalid-feedback">{errors.address?.message}</div>
                                        </div>

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
                                                <Button varient="success" size="lg">Success Button</Button>
                                                <Button varient="dark">Dark Button</Button>
                                                <Button varient="primary">Primary Button</Button>
                                                <Button varient="secondary">Secondary Button</Button>
                                                <Button varient="warning">Warning Button</Button>
                                                <Button varient="danger">Danger Button</Button>
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