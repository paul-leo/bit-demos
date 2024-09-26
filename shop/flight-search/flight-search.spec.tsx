import React from 'react';
import { render } from '@testing-library/react';
import { BasicFlightSearch } from './flight-search.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicFlightSearch />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
