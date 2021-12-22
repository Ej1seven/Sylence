import React from "react";

import "./contact-form-input.styles.scss";

const ContactFormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="contact-group">
    <input
      className="contact-form-input"
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default ContactFormInput;
