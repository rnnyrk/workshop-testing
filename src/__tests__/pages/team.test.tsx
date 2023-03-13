import Team from 'pages/team';

import { testRenderer, waitFor } from '../test-utils';

describe('When the users visits the team page, all employees should be visible', () => {
  test('<Team /> - Should render <Employees /> with mocked data', async () => {
    // Render a React element into the DOM
    const { queryAllByTestId, getByText, userEvent } = testRenderer(<Team />);

    // Check if all items are present
    await waitFor(() => {
      expect(queryAllByTestId('employee-item')).toHaveLength(60);
    });
  });
});
