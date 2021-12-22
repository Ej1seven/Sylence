import React from "react";
import { Route } from "react-router-dom";

// import Directory from "../../components/directory/directory.component";

import "./contact.component.css";

import ContactFormInput from "../../components/contact-form-input/contact-form-input";

import CustomButton from "../../components/custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import { ButtonsBarContainer } from "../../components/sign-in/sign-in.styles";

// import { HomePageContainer } from "./homepage.styles";

// const Contact = () => (
//   <div className="contact-page-container">
//     <h1 className="contact-title">CONTACT</h1>
//   </div>
// );

// export default Contact;

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      phoneNumber: "",
      message: "",
      popup: false,
      contactBox: true,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, name, phoneNumber, message } = this.state;
    console.log(email, name, phoneNumber, message);
    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: "", password: "" });
    // } catch (error) {
    //   console.log(error);
    // }
    fetch("https://usebasin.com/f/6ba36f7e7d26", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        name: name,
        phoneNumber: phoneNumber,
        message: message,
      }),
    }).then((response) => {
      if (response.ok) {
        console.log("Success");
        this.setState({ contactBox: false });
        this.setState({ popup: true });
      } else {
        return response.json().then((data) => {
          let errorMessage = "Authentication failed!";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          alert(errorMessage);
        });
      }
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    console.log(event.target.value);
    this.setState({ [name]: value });
  };

  handlePopup = () => {
    this.setState({ popup: false });
    this.setState({ contactBox: true });
    this.setState({ email: "", name: "", message: "", phoneNumber: "" });
  };

  handleKeyDown(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
    // In case you have a limitation
    // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
  }

  render() {
    return (
      <div className="contact-page-container">
        <h1 className="contact-title">CONTACT</h1>
        {this.state.contactBox && (
          <form className="contact-form" onSubmit={this.handleSubmit}>
            <ContactFormInput
              name="name"
              type="text"
              handleChange={this.handleChange}
              value={this.state.name}
              label="name"
              required
            />
            <ContactFormInput
              name="email"
              type="email"
              handleChange={this.handleChange}
              value={this.state.email}
              label="email"
              required
            />
            <ContactFormInput
              name="phoneNumber"
              type="tel"
              handleChange={this.handleChange}
              value={this.state.phoneNumber}
              label="phoneNumber"
              required
            />
            <textarea
              name="message"
              type="text"
              value={this.state.message}
              onChange={this.handleChange}
              required
              className="contact-message-box resize-ta"
              placeholder="Type out your message here..."
              onKeyDown={this.handleKeyDown}
            ></textarea>
            <ButtonsBarContainer>
              <CustomButton type="submit"> Send </CustomButton>
            </ButtonsBarContainer>
          </form>
        )}

        {this.state.popup && (
          <div className="popup">
            <p>Your submission was successful!</p>
            <ButtonsBarContainer>
              <CustomButton onClick={this.handlePopup}> OK </CustomButton>
            </ButtonsBarContainer>
          </div>
        )}
      </div>
    );
  }
}

export default Contact;
