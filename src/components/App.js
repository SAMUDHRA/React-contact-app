import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Routes, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import api from "../api/contacts";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts,setContacts] = useState([])

  //RetriveContacts
  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    console.log(contact);  
    const request = {
      id: uuidv4(),
      ...contact
    };

    const response = await api.post("/contacts", request)
    console.log(response);
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (updatedContact) => {
    const response = await api.put(`/contacts/${updatedContact.id}`, updatedContact);
    const { id, name, email } = response.data;
  
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

//   const updateContactHandler = async (updatedContact) => {
//   const response = await api.put(`/contacts/${updatedContact.id}`, updatedContact);
//   const { id, name, email } = response.data;

//   setContacts(
//     contacts.map((contact) => {
//       return contact.id === id ? { ...response.data } : contact;
//     })
//   );
// };

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // console.log(retriveContacts);
    // if (retriveContacts) setContacts(retriveContacts);
    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if(allContacts) setContacts(allContacts); 
    };

    getAllContacts();
  }, []);   

  useEffect(() => {
    if (contacts.length > 0) { 
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);


  return (
    <div className = "ui container">
      <Router>
        <Header /> 
        <Routes>  
        <Route 
            path = "/" 
            element = {<ContactList contacts = {contacts} getContactId = {removeContactHandler} />} 
          />
          <Route 
            path = "/add" 
            element = {<AddContact addContactHandler = {addContactHandler} />} 
          />
          <Route 
            path = "/edit" 
            element = {<EditContact updateContactHandler = {updateContactHandler} />} 
          />
          <Route path="/contact/:id" Component = {ContactDetail} />
          
      
       </Routes>
      </Router>
      
    </div>
  );
 }

export default App;

