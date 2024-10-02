import React, { useState } from 'react';
import './forms.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    // Form Submit Handler
    const formSubmitHandler = (e) =>{
        e.preventDefault();
        if(email.trim() === ""){
            return toast.error("Email is required");
        }
        if(password.trim() === ""){
            return toast.error("Password is required");
        }
    }

    return (
        <div className="form-wrapper">
            <ToastContainer theme='colored'/>
            <form onSubmit={formSubmitHandler} className="form">
                <input 
                    value={email} 
                    type="email" 
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    value={password}
                    type="password" 
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.password)}
                />
                <button className='form-btn'>Login</button>
            </form>
        </div>
    )
}
