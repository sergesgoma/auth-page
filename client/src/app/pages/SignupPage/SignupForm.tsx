import React, { useState } from 'react';
import axios from 'axios';

export const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  axios.defaults.withCredentials = true;

  const register = () => {
    axios.post("/signup", {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <section className="section__text">
      <form action="/signup" method='post' onSubmit={register}>
        <div className="form">
          <h1>SIGN UP</h1>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="btn" type='submit'>
            SIGN UP
          </button>
          <p className="text">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </div>
        </form>
    </section>
  );
};
