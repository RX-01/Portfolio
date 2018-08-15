// import React, { Component } from 'react'

// const encode = (data) => {
//   return Object.keys(data)
//       .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//       .join("&");
// }

// class Contact extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: "", email: "", message: "" };
//   }

//   /* Here’s the juicy bit for posting the form submission */

//   handleSubmit = e => {
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: encode({ "form-name": "contact", ...this.state })
//     })
//       .then(() => alert("Success!"))
//       .catch(error => alert(error));

//     e.preventDefault();
//   };

//   handleChange = e => this.setState({ [e.target.name]: e.target.value });

//   render() {
//     const { name, email, message } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <p>
//           <label>
//             Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
//           </label>
//         </p>
//         <p>
//           <label>
//             Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
//           </label>
//         </p>
//         <p>
//           <label>
//             Message: <textarea name="message" value={message} onChange={this.handleChange} />
//           </label>
//         </p>
//         <p>
//           <button type="submit">Send</button>
//         </p>
//       </form>
//     );
//   }
// }

// export default Contact

import React from 'react'

const Contact =  () => {
  return (
   
    <form name="contact-form" method="POST" netlify>
    <p>
      <label>Your Name: <input type="text" name="name" /></label>   
    </p>
    <p>
      <label>Your Email: <input type="email" name="email" /></label>
    </p>
    <p>
      <label>Your Role: <select name="role[]" multiple>
        <option value="leader">Leader</option>
        <option value="follower">Follower</option>
      </select></label>
    </p>
    <p>
      <label>Message: <textarea name="message"></textarea></label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
 
  )
}
export default Contact