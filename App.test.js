import { render, screen } from '@testing-library/react';

import VotingMachine from './VotingMachine';


test('renders learn react link', () => {
  render(<VotingMachine/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
