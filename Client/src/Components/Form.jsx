import React from 'react'

function Form() {
  return (
    <div className="form_container">
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
    </div>
  );
}

export default Form
