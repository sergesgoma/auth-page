import React from 'react';
import { Form } from './Form';
import { Image } from './Image';
import './Main.css';

export const Main = () => {
  return (
    <div className='main'>
      <Image />
      <Form />
    </div>
  );
};
