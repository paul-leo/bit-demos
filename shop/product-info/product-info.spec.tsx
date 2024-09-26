import React from 'react';
import { render } from '@testing-library/react';
import { BasicProductInfo } from './product-info.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicProductInfo />);
  const rendered = getByText('汤臣倍健 蛋白粉600g组合装 增强免疫力');
  expect(rendered).toBeTruthy();
});
