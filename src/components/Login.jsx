import React from 'react';
import TextField from '@material-ui/core/TextField';

const Login = () => {

  return (
    <>
      <form>
        <p>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </p>
        <p>
          <TextField id="outlined-password-input" label="Password" type="password" variant="outlined" />
        </p>
        <button>Login</button> 
      </form>
    </>
  )
}

export default Login;