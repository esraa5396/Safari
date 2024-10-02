import React, { useState } from 'react';
import "./header.css";
import Navbar from './Navbar';
import Logo from './Logo';

export default function Header() {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () =>{
        setToggle(prev => !prev);
    }
    return (
        <header className="header">
            <Logo />
            <Navbar toggle={toggle} setToggle={setToggle}/>
            <div onClick={handleToggle} className="header-menu">
                {toggle ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
            </div>
        </header>
    )
}
