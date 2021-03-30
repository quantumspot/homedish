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
  const [nickname, setNickname] = useState("");
  const [experience, setExperience] = useState("");
  const [userType, setUserType] = useState("Eater");
  const [validationMap, setValidationMap] = useState({});

  const handleSignup = async () => {
    const fields = {
      "first name": firstName,
      "last name": lastName,
      email_address: email,
      password: password,
      "re-enter password": reenterPassword,
      street: street,
      city: city,
      state: state,
      zip: zip,
      allergies: allergies,
      is_cook: false
    };

    const signUpErrors = {};
    for (const key in fields) {
      if (!fields[key]) {
        signUpErrors[key] = `${key} is required`;
      } else if (key === "password" || key === "re-enter password") {
        if (fields["password"] !== fields["re-enter password"]) {
          signUpErrors["password"] = "passwords must match";
          signUpErrors["re-enter password"] = "passwords must match";
        }
      } else if (key === "allergies" && !fields[key]) {
        signUpErrors[key] = "Indicate none if no allergies";
      }
    }

    if (Object.keys(signUpErrors).length > 0) {
      setValidationMap(signUpErrors);
      return;
    }

    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        email_address: email,
        password,
        address: `${street} ${city}, ${state} ${zip}`,
        allergies,
        profile_img: "img",
        nickname,
        experience,
        userType,
        is_cook: false
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

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
            error={!!validationMap["first name"]}
            helperText={validationMap["first name"]}
            variant="outlined"
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
            error={!!validationMap["last name"]}
            helperText={validationMap["last name"]}
            variant="outlined"
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
            error={!!validationMap["email"]}
            helperText={validationMap["email"]}
            variant="outlined"
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
            error={!!validationMap["password"]}
            helperText={validationMap["password"]}
            variant="outlined"
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
            error={!!validationMap["re-enter password"]}
            helperText={validationMap["re-enter password"]}
            variant="outlined"
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
            error={!!validationMap["street"]}
            helperText={validationMap["street"]}
            variant="outlined"
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
            error={!!validationMap["city"]}
            helperText={validationMap["city"]}
            variant="outlined"
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
            error={!!validationMap["zip"]}
            helperText={validationMap["zip"]}
            variant="outlined"
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
            error={!!validationMap["state"]}
            helperText={validationMap["state"]}
            variant="outlined"
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
            error={!!validationMap["allergies"]}
            helperText={!!validationMap["allergies"]}
            variant="outlined"
          />
        </p>
        {userType === "Cook" && (
          <div>
            <p>
              <TextField
                label="Years of Experience"
                type="number"
                id="experience"
                name="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                error={!experience}
                helperText={
                  experience
                    ? ""
                    : "Let your eaters know if you are a novice cook or a MasterChef."
                }
                variant="outlined"
              />
            </p>
            <p>
              <TextField
                label="Nickname"
                type="text"
                id="nickname"
                name="nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                error={!nickname}
                helperText={
                  nickname ? "" : "This is the name your eaters will see."
                }
                variant="outlined"
              />
            </p>
          </div>
        )}
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
        <Button color="primary" onClick={handleSignup}>
          Sign Up
        </Button>
      </form>
    </>
  );
};

export default Signup;
