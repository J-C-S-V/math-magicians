import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Home from '../components/Home';

afterEach(() => {
  cleanup();
});

test('matches snapshot', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders Home component', () => {
  render(<Home />);
  const homeElement = screen.getByTestId('main');
  expect(homeElement).toBeInTheDocument();
});

test('renders Home component', () => {
  render(<Home />);
  const homeElement = screen.getByTestId('main-p1');
  expect(homeElement).toBeInTheDocument();
});
