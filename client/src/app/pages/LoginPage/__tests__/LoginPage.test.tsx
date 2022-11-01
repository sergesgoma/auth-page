import React from 'react';
import { render } from '@testing-library/react';
import { LoginPage } from '../index';

test('renders the login page', () => {
  render(<LoginPage />);
});
