import { render, screen } from '@testing-library/react';

import RootComponent from './RootComponent';

describe('test react-testing-library', () => {
  it('test App component', () => {
    render(<RootComponent />);

    expect(screen.getByTestId('App')).toBeInTheDocument();
  });
});
