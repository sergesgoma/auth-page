import React, { useState } from 'react';
import axios from 'axios';

export const LoginForm = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  axios.defaults.withCredentials = true;

  const login = () => {
    axios
      .post('/login', {
        email: user,
        password: password
      })
      .then((response) => {
        if (!response.data.message) {
        } else {
          console.log(response.data);
        }
      });
  };
  
  return (
    <section className="section__text">
      <form action="/login" method="post">
        <div className="form">
          <h1>LOG IN</h1>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <button type="submit" className="btn" onClick={login}>
            LOG IN
          </button>
          <p className="text">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </form>
    </section>
  );
};
