import React from "react";
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
                <div className="header">{name}</div>
                <div>{email}</div>
                
            </div>
        </div>

           
           
    );
}


export default ContactCard;