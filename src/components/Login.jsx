import React from 'react';

const Login = () => {

  return (
    <>
      <form>
        <p>
            <label name="email">Email</label>
            <input type="text" id="email" name="email"/>
        </p>
        <p>
            <label name="password">Password</label>
            <input type="password" id="password" name="password"/>
        </p>
        <button>Login</button> 
      </form>
    </>
  )
}

export default Login;