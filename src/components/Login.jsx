import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleSignIn = () => {
  
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        email_address: email,
        password: password
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      history.push('/');
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <form>
        <p>
          <TextField
            label="Email"
            type="text"
            id="outlined-basic"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
          />
        </p>
        <p>
          <TextField
            label="Password"
            type="password"
            id="outlined-password-input"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
          />
        </p>
        <Button color="primary" onClick={handleSignIn}>
          Sign In
        </Button>
      </form>
    </>
  );
}

export default Login;