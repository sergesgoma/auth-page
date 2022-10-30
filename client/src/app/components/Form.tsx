import React from 'react';
import { Button } from './Button';
import './Form.css';
export const Form = () => {
  return (
    <section className="login">
      <form action="/login" method="post">
        <div className="form">
          <h1>LOG IN</h1>
          <input type="email" name="email" id="email" placeholder='Email address'/>
          <input type="password" name="password" id="password" placeholder='Password'/>
          <Button />
        </div>
      </form>
    </section>
  );
};
