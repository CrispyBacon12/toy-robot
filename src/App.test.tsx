import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a heading', () => {
  render(<App />);
  const heading = screen.getByText(/Help the Robot Deliver Some Sushi!/i);
  expect(heading).toBeInTheDocument();
});
