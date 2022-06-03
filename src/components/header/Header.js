import React from "react";
import { Link } from "react-router-dom";
import "./header.css";


export const Header = () => {
    return (
        <>
                <nav className="nav-container">
                    <div className="nav-cell logo">
                        <Link to="./">Logo</Link>
                    </div>
                    <div className="nav-cell links-container">
                        <Link to="./">
                            <div className="nav-btn">Map of Tables</div>
                        </Link>
                        <Link to="./guests">
                            <div className="nav-btn">guests</div>
                        </Link>
                    </div>
                    <div className="nav-cell log-container">Login</div>
                </nav>
        </>
    )
}