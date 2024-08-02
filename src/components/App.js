import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
// import { uuid } from "uuidv4";
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts,setContacts] = useState([])

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
    // setContacts([...contacts, {id: uuid(), ...contact}]);
  };
  
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };


  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    console.log(retriveContacts);
    if (retriveContacts) setContacts(retriveContacts);
  }, []);   

  useEffect(() => {
    if (contacts.length > 0) { 
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);


  return (
    <div className="ui container">
      <Router>
        <Header /> 
        <Routes>  
        <Route 
            path="/" 
            element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} 
          />
          <Route 
            path="/add" 
            element={<AddContact addContactHandler={addContactHandler} />} 
          />
          
        //   {/* <AddContact addContactHandler = {addContactHandler}/>
        //   <ContactList contacts = {contacts} getContactId = {removeContactHandler} /> */}
       </Routes>
      </Router>
      
    </div>
  );
 }

export default App;

