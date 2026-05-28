import { useState } from "react"
import "../styles/SignUp.css";

function SignUp() {

    const [ formData, setFormData ] = useState({

        firstName : "",
        lastName : "",
        middleName : "",
        email : "",
        username : "",
        password : "",
        confirmpassword : "",
        phone : "",

    })
    return (
        <div className="signup-container">

            <div className="signup-component">

                <h1 className="signup-title">
                    Create Account
                </h1>

                <input
                    className="signup-input"
                    type="text"
                    placeholder="First-Name"
                />

                <input
                    className="signup-input"
                    type="text"
                    placeholder="Last-Name"
                />

                <input
                    className="signup-input"
                    type="text"
                    placeholder="Middle-Name"
                />

                <input
                    className="signup-input"
                    type="email"
                    placeholder="Email"
                />

                <input
                    className="signup-input"
                    type="number"
                    placeholder="Phone Number"
                />

                <input
                    className="signup-input"
                    type="text"
                    placeholder="UserName"
                />

                <input 
                    className="signup-input"
                    type="password"
                    placeholder="Enter Password"
                />

                <input
                    className="signup-input"
                    type="password"
                    placeholder="Confirm Password"
                />

                <button className="signup-button">
                    Create Account
                </button>


            </div>

        </div>

    );
}

export default SignUp;