import React from 'react';

const Login = () => {

  return (
    <>
      <form>
        <p>
          <label name="email">Email</label>
          <input type="text" ref={emailRef} id="email" name="email" />
        </p>
        <p>
          <label name="password">Password</label>
          <input type="password" ref={passwordRef} id="password" name="password" />
        </p>
        <p>
          <label name="password">Password Confirmation</label>
          <input type="password" ref={passwordConfirmationRef} id="password" name="password" />
        </p>
        <button>Sign Up</button>
      </form>
    </>
  )
}

export default Login;