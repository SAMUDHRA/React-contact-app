import React from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../images/img.png";

const ContactDetail = () => {
    const location = useLocation(); 
    const contact = location.state?.contact;

    if (!contact){
        return (
            <div className="main">
                <h2>No Contact Data Available</h2>
                <Link to="/">
                    <button className="ui button blue center">Back to Contact List</button>
                </Link>
            </div>
        );
    }


    const { name, email } = contact;
        return (
            <div className="main">
                <div className="ui card centered ">
                    <div className="image">
                        <img src={user} alt="user" style={{marginTop:"60px"}} />
                    </div>
                    <div className="content">
                        <div className="header">{name}</div>
                        <div className="description">{email}</div>
                    </div>
                </div>
                <div className="center-div">
                    <Link to="/">
                        <button className="ui button blue" style={{marginLeft:"480px"}}>Back to Contact List</button>
                    </Link>
                </div>
            </div>         
    );
}


export default ContactDetail;