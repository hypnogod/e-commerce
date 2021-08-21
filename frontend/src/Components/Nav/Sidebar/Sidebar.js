import React from 'react'
import "./Sidebar.css"
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

function Sidebar() {
    return (
        <div className="sidemenuCanvas" id="sidebar">
            <div className="sidemenuHeader">
                <PermIdentityIcon fontSize="large"/>
                <b>Hello, Sign in</b>
            </div>
            <div className="sidemenuContent">
                <ul className="sidemenuOrder">
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Account</li>
                    <li>Register</li>
                    <li>Login</li>
                    <li>About Us</li>
                    <li>Help</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
