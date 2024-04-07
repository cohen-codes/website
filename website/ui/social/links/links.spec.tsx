import { render } from '@testing-library/react';
import { BasicLinks } from './links.composition.js';

describe('Social links', () => {
  it('should render all the social links', () => {
    const { getByTestId } = render(<BasicLinks />);
    const rendered = getByTestId('links');
    expect(rendered).toBeTruthy();
  });
});
