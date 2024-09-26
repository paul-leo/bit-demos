import React from 'react';
import { render } from '@testing-library/react';
import { BasicHomePage } from './home-page.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicHomePage />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
