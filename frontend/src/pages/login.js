import { useState } from "react";
import "../styles/login.css"

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="login-container">
            <div className="login-component">
                <h1 className="login-title">
                    Please Enter your Credentials...
                </h1>
                <input 
                    className="login-username"
                    type="text" 
                    placeholder="Enter Username" 
                />
                <div className="password-block">
                    <input
                        className="login-password"
                        type={showPassword ? "text" : "password"} 
                        placeholder="Enter your Password" 
                    />
                    <span
                        className="eye-icon"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        👁
                    </span>

                </div>
                
                <button className="login-button">
                    Login
                </button>
            </div>
        </div>
    )
}

export default Login;