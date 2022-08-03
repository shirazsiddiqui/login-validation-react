import { useState, useEffect } from 'react';
import React from 'react'


function Login() {

    const initialValues = { email: "", password: "" };
    const [formValues, setformValues] = useState(initialValues);
    const [formErrors, setformErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setformValues({ ...formValues, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setformErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 5) {
            errors.password = "Password must be more than 5 characters";
        } else if ((values.password.search(/[#]/) === -1) && (values.password.search(/[@]/) === -1)) {
            errors.password = "Password must be atleast 1 special character characters";
        } else if (values.password.search(/[A-Z]/) == -1) {
            errors.password = "Password must be atleast 1 capital letter";
        }
        return errors;
    }

    return (
        <>
           {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="text-success">Signed in successfully</div>
      ) : (
        <div className="text-danger">Signed in unsuccessfully</div>
      )}
      <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
                <h1>LogIn Form</h1>
                <div className="mb-3 mt-5">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <p className="text-danger">{formErrors.email}</p>
                    <input type="email" className="form-control" placeholder="Email" name="email" value={formValues.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <p className="text-danger">{formErrors.password}</p>
                    <input type="password" className="form-control" name="password" placeholder="Password" value={formValues.password} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            </div>
        </>
    )
}

export default Login