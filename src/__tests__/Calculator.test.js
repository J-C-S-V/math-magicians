import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Calculator from '../components/calculator';

describe('Calculator', () => {
  test('renders without crashing', () => {
    render(<Calculator />);
  });

  test('displays button text when clicked', () => {
    render(<Calculator />);
    const button = screen.getByText('7');
    userEvent.click(button);
    expect(screen.getByText('7')).toBeInTheDocument();
  });
});
