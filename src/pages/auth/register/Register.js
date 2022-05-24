import React, { useState } from "react";
import { auth } from "../../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      url: "http://localhost:3000/register/complete",
      handleCodeInApp: true,
    };
    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `Email is sent to ${email}. Click the email link to complete your registration.`
    );
    // Save email in the local storage
    window.localStorage.setItem("emailForregistration", email);

    // Clear state
    setEmail("");
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        className='form-control'
        placeholder='Enter your email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
      />
      <br />
      <button type='submit' className='btn btn-outline-primary'>
        Register
      </button>
    </form>
  );

  return (
    <div className='container p-5'>
      <div className='  '>
        <div className='col-md-6 offset-md-3'>
          <h4>Register</h4>
          {registerForm()}
        </div>
      </div>
    </div>
  );
}

export default Register;
