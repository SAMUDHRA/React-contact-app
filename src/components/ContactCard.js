import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <div className="right floated content">
                <i className="trash alternate outline icon" style={{ color: "red", cursor: "pointer", marginTop: "7px"}} 
                onClick={ () => props.clickHandler(id) }></i>
            </div>
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <Link to={`/contact/${id}`} 
                     state={{ contact: props.contact }} >
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
        </div>

           
           
    );
}


export default ContactCard;