import React, { useState } from 'react';
import './forms.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Form Submit Handler
    const formSubmitHandler = (e) =>{
        e.preventDefault();
        if(email.trim() === ""){
            return toast.error("Email is required");
        }
        if(username.trim() === ""){
            return toast.error("Username is required");
        }
        if(password !== confirmPassword){
            return toast.error("Password don't match");
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
                    value={username}
                    type='text'
                    placeholder='UserName'
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    value={password}
                    type="password" 
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.password)}
                />
                <input 
                    value={confirmPassword}
                    type="password" 
                    placeholder='Confirm Password'
                    onChange={(e) => setConfirmPassword(e.target.password)}
                />
                <button className='form-btn'>Register</button>
            </form>
        </div>
    )
}
