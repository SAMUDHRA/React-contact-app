import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditContact = ({ updateContactHandler }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const contact = location.state?.contact || {};

  const [id, setId] = useState(contact.id || '');
  const [name, setName] = useState(contact.name || '');
  const [email, setEmail] = useState(contact.email || '');

  useEffect(() => {
    setId(contact.id || '');
    setName(contact.name || '');
    setEmail(contact.email || '');
  }, [contact]);

  const update = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All fields are mandatory!");
      return;
    }
    updateContactHandler({ id, name, email });
    navigate("/");
  };

  return (
    <div className="ui container">
      <h2 style={{ marginTop: "50px" }}>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditContact;


