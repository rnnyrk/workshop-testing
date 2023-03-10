// import { rest } from 'msw';
// import { rest } from 'msw';

import Team from 'pages/team';

// import teamResponse from '../mocks/data/team.json';
// import { server } from '../mocks/server';
import { testRenderer, waitFor } from '../test-utils';

describe('When the users visits the team page, all employees should be visible', () => {
  // beforeEach(() => {
  //   server.use(rest.get('/api/team', (req, res, ctx) => res(ctx.json(teamResponse))));
  // });

  test('<Team /> - Should render <Employees /> with mocked data', async () => {
    // Render a React element into the DOM
    const { queryAllByTestId, getByText, userEvent } = testRenderer(<Team />);

    // Check if all items are present
    await waitFor(() => {
      expect(queryAllByTestId('employee-item')).toHaveLength(3);
    });
  });
});
