import { render, screen } from '@testing-library/react';
import App from './App';

// jest.mock('./UserForm', () => {
//   return () => {};
// })

test('renders', () => {
  render(<App />);
});

test('renders newsletter (which is in another component)', async () => {
  render(<App />);
  const h2El = await screen.findByText(/newsletter/i);
  expect(h2El).toBeInTheDocument();
});
