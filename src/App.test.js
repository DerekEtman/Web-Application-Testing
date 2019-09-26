import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Dashboard from './components/Dashboard';
// import App from "./App";

// remember AAA: Arrange Act Assert 
test("runs without crashing", () => {
  const container = rtl.render(<Dashboard />);
  container.getByText(/strikes/i);
});