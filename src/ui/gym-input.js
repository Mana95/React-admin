import React, { useState } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const regex ={
    //email: new RegExp(
       // '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
    //),

   // number: new RegExp ('^[0-9}+$'),
};

export class Validators {
    static email(value, message){
        if (value){
            const result = regex.email.test(value);
            if (!result) return {error: true, message };
        }
    }

    static required(value, message) {
        if (!value || !value.toString().trim().length){
            return {error: true, message};
        } 
        return false;
    }

    static number(value, message){
        const length = value ? value.toString().length : 0;

        if (length > 0){
            const result = regex.number.test(value);
            if (!result){
                return {error: true,message};
            }
        }
        return false;
    }
}

export const validateInput = (validators, value) => {
    if (validators && validators.length){
        for (let i=0; i < validators.lenght; i++) {
            const error = validators[i].check(value, validators[i].message);
            if (error) {
                return error;
            }
        }
    }
    return false;
};

 const InputField = ({value, label, placeholder, validators, type, onChange}) => {
    
    const [error, setError] = useState(false);

    const handleChange =(event) => {
        const {value} = event.target;
        setError(validateInput(validators, value));
        onChange(value);
    };


    return(
        <div className="form-group">
            {label && <label htmlFor="app-input-field">{label}</label>}
            <input type={type}
            value={value} 
            className="form-control" 
            placeholder={placeholder} 
            onChange={handleChange}/>

            {error && <span className='text-danger'>{error.message}</span>}
        </div>


    )
 };

 InputField.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    validators: PropTypes.array,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired
 };

 InputField.defaultProps = {
    value: '',
    label: '',
    placeholder: '',
    type: 'text',
    validators: []
 }

 export default InputField;


//const ButtonComponent = styled.button`
//position: relative;
//display: inline-flex;
//align-items: center;
//justify-content: center;
//text-align: center;
//text-decoration: none;
//vertical-align: middle;
//cursor: pointer;
//user-select: none;
//border-radius: 0.3rem;
//padding: 0 
//${props => props.size === "sm" 
//? "1.1rem" : props.size === "md" 
//? "1.4rem" : props.size === "lg" 
//? "1.6rem" 
//: "1.1rem"};
//height: ${props => 
    //props.size === "sm" 
    //? "34px" : props.size === "md" 
    //? "37px" : props.size === "lg" 
    //? "40px" 
    //: "34px"};
    //font-family: "inter", sans-serif;
    //font-weight: 500;
    //border: 1px solid transparent;
//background-color: ${props => 
    //props.varient === "light" 
    //? "#f8f9fa" : props.varient === "dark" 
    //? "#212529" : props.varient === "primary" 
    //? "#0d6efd" : props.varient === "secondary" 
    //? "#707173" :props.varient === "success" 
    //? "#198754" : props.varient === "info" 
    //? "#0dcaf0" : props.varient === "warning" 
    //? "#ffc107" : props.varient === "danger" 
    //? "#dc3545" 
    //: "#f8f9fa"};
//color: ${props => 
    //props.varient === "light" 
    //? "#212529" : props.varient === "dark" 
    //? "#ffffff" : props.varient === "primary" 
    //? "#ffffff" : props.varient === "secondary" 
    //? "#ffffff" :props.varient === "success" 
    //? "#ffffff" : props.varient === "info" 
    //? "#ffffff" : props.varient === "warning" 
    //? "#ffffff" : props.varient === "danger" 
    //? "#ffffff" 
    //: "#f8f9fa"};
//`;

//const Button = ({ type, varient, className, id, onClick, children, size }) => {

    //return (
        //<div>
            //<ButtonComponent type={type ? type : "button"} varient={varient} size={size}
                //className={className ? 'btn-component ${className}' : "btn-component"}
                //id={id}
                //onClick={onClick}>
                //{children}
            //</ButtonComponent>
        //</div>
    //);
//};

//export default Button;