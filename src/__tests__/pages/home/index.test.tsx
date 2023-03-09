import Home from 'pages/index';

import { testRenderer } from '../../test-utils';

describe('When the users visits the homepage', () => {
  test('<Index /> - Should render text contents', () => {
    // Render a React element into the DOM
    const { getByText, getByRole } = testRenderer(<Home />);

    // assert that the footer is showing the correct texts, as well as
    // searching by aria-role and match on toHaveTextContent, a custom matcher from jest-dom
    expect(getByText('Created by')).toBeInTheDocument();
    expect(getByRole('link')).toHaveTextContent('LabelA');
  });
});
