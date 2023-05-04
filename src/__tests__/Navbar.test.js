import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  test('renders', () => {
    expect(<Navbar />).toMatchSnapshot();
  });
  test('renders the Navbar component', () => {
    render(<Navbar />);
    const navbarElement = screen.getByTestId('navbar');
    expect(navbarElement).toBeInTheDocument();
  });

  test('renders the Math Magicians title', () => {
    render(<Navbar />);
    const titleElement = screen.getByText('Math Magicians');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the Home navigation link', () => {
    render(<Navbar />);
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
  });
});
