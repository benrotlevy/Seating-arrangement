import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logoBig from "../../logo-big.png"


export const Header = () => {
    return (
        <>
                <nav className="nav-container">
                    <div className="nav-cell logo-cont">
                        <Link to="./"><img alt="#" src={logoBig} className="logo" /></Link>
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