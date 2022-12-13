import React from "react";
import FormHeading from "./FormHeading";

function Form() {
  return (
    <>
    <FormHeading />
      <div>
        <div>
          <p>First Name</p>
          <input type="text" />
        </div>
        <div>
          <p>Last Name</p>
          <input type="text" />
        </div>
      </div>

      <div>
        <p>Email</p>
        <input type="email" />
      </div>

      <div>
        <p>Password</p>
        <input type="password" />
      </div>

      <button>Continue</button>
    </>
  );
}

export default Form;
