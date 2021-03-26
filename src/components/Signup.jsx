import React, { useState } from "react";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [allergies, setAllergies] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  return (
    <>
      <form>
        <p>
          <label name="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </p>
        <p>
          <label name="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </p>
        <p>
          <label name="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label name="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <label name="re-enter">Re-enter Password</label>
          <input
            type="password"
            id="re-enter"
            name="re-enter"
            value={reenterPassword}
            onChange={(e) => setReenterPassword(e.target.value)}
          />
        </p>
        <p>
          <label name="street">Address, Street</label>
          <input
            type="text"
            id="street"
            name="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </p>
        <p>
          <label name="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </p>
        <p>
          <label name="zip">Zip Code</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </p>
        <p>
          <label name="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </p>
        <p>
          <label name="allergies">Allergies</label>
          <input
            type="text"
            id="allergies"
            name="allergies"
            value={allergies}
            onChange={(e) => setAllergies(e.target.value)}
          />
        </p>
        <p>
          <label name="profile-picture">Profile Picture</label>
          <input
            type="file"
            id="profile-picture"
            name="profile-picture"
            // value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.files[0])}
          />
          {profilePicture && <img src={URL.createObjectURL(profilePicture)}/>}
        </p>
        <button>Sign Up</button>
      </form>
    </>
  );
};

export default Signup;
