import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../components/Quote';

test('displays loading message before fetching data', () => {
  const { getByText } = render(<Quote />);
  const loadingMessage = getByText(/loading/i);
  expect(loadingMessage).toBeInTheDocument();
});
