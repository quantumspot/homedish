import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

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
  const [userType, setUserType] = useState("Eater");


  return (
    <>
      <Button onClick={() => setUserType("Eater")}>Eat</Button>
      <Button onClick={() => setUserType("Cook")}>Cook</Button>
      <form>
        <p>
          <TextField
            type="text"
            id="firstname"
            label="First Name"
            name="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </p>
        <p>
          <TextField
            label="Last Name"
            type="text"
            id="lastname"
            name="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </p>
        <p>
          <TextField
            label="Email"
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <TextField
            label="Password"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <TextField
            label="Re-enter Password"
            type="password"
            id="re-enter"
            name="re-enter"
            value={reenterPassword}
            onChange={(e) => setReenterPassword(e.target.value)}
          />
        </p>
        <p>
          <TextField
            label="Street Address"
            type="text"
            id="street"
            name="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </p>
        <p>
          <TextField
            label="City"
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </p>
        <p>
          <TextField
            label="Zipcode"
            type="text"
            id="zip"
            name="zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </p>
        <p>
          <TextField
            label="State"
            type="text"
            id="state"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </p>
        <p>
          <TextField
            label="Allergies"
            type="text"
            id="allergies"
            name="allergies"
            value={allergies}
            onChange={(e) => setAllergies(e.target.value)}
          />
        </p>
        {userType === "Cook" && <p>
          <TextField label="test cook" />
        </p>}
        <p>
          <Input
            type="file"
            id="profile-picture"
            name="profile-picture"
            // value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.files[0])}
          />
          {profilePicture && (
            <img
              src={URL.createObjectURL(profilePicture)}
              style={{ width: "200px", height: "200px" }}
            />
          )}
        </p>
        <Button color="primary">Sign Up</Button>
      </form>
    </>
  );
};

export default Signup;
