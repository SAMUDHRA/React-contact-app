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



// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";


// function withRouter(Component) {
//   function ComponentWithRouterProp(props) {
//     const location = useLocation();
//     const navigate = useNavigate();
//     return <Component {...props} navigate = {navigate} />;
//   }
//   return ComponentWithRouterProp;
// }

// class EditContact extends React.Component {
//   constructor(props) {
//     super(props);
//     const {id, name, email} = props.location.state.contact || {};
//     this.state = {
//       id: id || '',
//       name: name || '',
//       email: email || '',
//     };
//   }

//   update = (e) => {
//     e.preventDefault();
//     if (this.state.name === "" || this.state.email === "") {
//       alert("All the fields are mandatory!");
//       return;
//     }
//     this.props.updateContactHandler(this.state);
//     this.setState({ name: "", email: "" });
//     this.props.navigate("/");
//   };
//   render() {
//     return (
//       <div className="ui container">
//         <h2 style={{marginTop:"50px"}}>Edit Contact</h2>
//         <form className="ui form" onSubmit={this.update}>
//           <div className="field">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={this.state.name}
//               onChange={(e) => this.setState({ name: e.target.value })}
//             />
//           </div>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={this.state.email}
//               onChange={(e) => this.setState({ email: e.target.value })}
//             />
//           </div>
//           <button className="ui button blue">Update</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default withRouter(EditContact);