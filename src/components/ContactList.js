import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props.contacts); 

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard 
                contact={contact} 
                clickHandler={deleteContactHandler} 
                key={contact.id}
            />
        );
    });

    return (
        <div className="main">
            <h2 style={{ marginTop: "50px"}}>Contact List
                <Link to = "/add">
                <button className="ui button blue right floated content">Add Contact</button>
                </Link>
            </h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input type="text" placeholder="Search Contact" className="prompt" />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">{renderContactList}</div>
        </div>
    );
};

export default ContactList;

// import React from "react";
// import ContactCard from "./ContactCard";


// const ContactList = (props) => {
//     console.log(props);

//     const deleteContactHandler = (id) => {
//         props.getContactId(id);
//     };
//     const contacts = [
//         {
//             id: "1",
//             name: "samudhra",
//             email: "samuthrabs@gmail.com"
//         },
//     ];
//     const renderContactList = contacts.map((contact) => {
//         return (
//             <ContactCard 
//                 contact = {contact} 
//                 clickHandler = {deleteContactHandler} 
//                 key = {contact.id}></ContactCard>
//         );
//     })
//     return(
//         <div className="main">
//             <h2>Contact List</h2>
//             <div className="ui celled list">{renderContactList}</div>
//         </div>
//     );
// };


// export default ContactList;