import { render, screen } from '@testing-library/react';
import App from './App';

test('renders friends list', () => {
  render(<App />);
  const textElement = screen.getByText(/Friends List/i);
  expect(textElement).toBeInTheDocument();
});
