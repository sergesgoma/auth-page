import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

export const Home = () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('/home');
      setData(result.data.connected);
    }
    fetchData();
  }, []);

  return (
    <section className="section__text">
      <div className={!data ? 'form' : 'offline'}>
        <h1 className="title">HOMEPAGE</h1>
        <a href="/login" className="links">
          Log In
        </a>
        <a href="/signup" className="links">
          Sign Up
        </a>
      </div>
      <div className={data ? 'form' : 'offline'}>
        <h1 className="title">WELCOME!</h1>
        <form action="/logout" method="post">
          <button className="links logout">Log Out</button>
        </form>
      </div>
    </section>
  );
};
