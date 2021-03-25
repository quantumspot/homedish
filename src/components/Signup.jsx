import React from 'react';

const Signup = () => {

  return (
    <>
      <form>
        <p>
          <label name="firstname">First Name</label>
          <input type="text" id="firstname" name="firstname" /> 
        </p>
        <p>
          <label name="lastname">Last Name</label>
          <input type="text" id="lastname" name="lastname" /> 
        </p>
        <p>
          <label name="email">Email</label>
          <input type="text" id="email" name="email" />
        </p>
        <p>
          <label name="password">Password</label>
          <input type="password" id="password" name="password" />
        </p>
        <p>
          <label name="re-enter">Re-enter Password</label>
          <input type="password" id="re-enter" name="re-enter" />
        </p>
        <p>
          <label name="street">Address, Street</label>
          <input type="text" id="street" name="street" />
        </p>
        <p>
          <label name="city">City</label>
          <input type="text" id="city" name="city" />
        </p>
        <p>
          <label name="zip">Zip Code</label>
          <input type="text" id="zip" name="zip" />
        </p>
        <p>
          <label name="state">State</label>
          <input type="text" id="state" name="state" />
        </p>
        <p>
          <label name="allergies">Allergies</label>
          <input type="text" id="allergies" name="allergies" />
        </p>
        <button>Sign Up</button>
      </form>
    </>
  );
}

export default Signup;