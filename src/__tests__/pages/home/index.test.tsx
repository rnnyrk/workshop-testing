import mockRouter from 'next-router-mock';

import Home from 'pages/index';

import { testRenderer, within } from '../../test-utils';

describe('When the users visits the homepage, navigation should be possible', () => {
  test('<Index /> - Should render <Navigation /> with links', () => {
    // Render a React element into the DOM
    const { getByRole } = testRenderer(<Home />);

    // Navigation
    const navigation = getByRole('navigation');
    expect(navigation).toBeInTheDocument();

    expect(within(navigation).getByRole('link', { name: 'Navigate home' })).toBeInTheDocument();

    // Check if all the navigation items are present (could be dynamic from Contentful)
    expect(within(navigation).getAllByRole('menuitem')).toHaveLength(3);
  });

  test('<Index /> - Should navigate to links from the <Navigation />', async () => {
    // Render a React element into the DOM
    const { getByRole, userEvent } = testRenderer(<Home />);

    const navigation = getByRole('navigation');

    // Logo links to /
    // Checking a link against an accessible name; https://www.tpgi.com/what-is-an-accessible-name
    const logoLink = within(navigation).getByRole('link', { name: 'Navigate home' });

    await userEvent.click(logoLink);
    expect(mockRouter.asPath).toEqual('/');

    // Navigate to /
    const homeLink = within(navigation).getByText('Home');
    expect(homeLink).toBeInTheDocument();

    await userEvent.click(homeLink);
    expect(mockRouter.asPath).toEqual('/');

    // Navigate to /team
    const teamLink = within(navigation).getByText('Team');
    expect(teamLink).toBeInTheDocument();

    await userEvent.click(teamLink);
    expect(mockRouter.asPath).toEqual('/team');

    // Navigate to /contact
    const contactLink = within(navigation).getByText('Contact');
    expect(contactLink).toBeInTheDocument();

    await userEvent.click(contactLink);
    expect(mockRouter.asPath).toEqual('/contact');
  });
});

describe('When the users visits the homepage, the usps should be present', () => {
  test('<Index /> - Should render <Usps />', () => {
    // Render a React element into the DOM
    const { getByText, getByRole } = testRenderer(<Home />);

    expect(getByText('Investment options')).toBeInTheDocument();

    // Usps
    const usps = getByRole('list');
    expect(usps).toBeInTheDocument();

    // Check if all the usps are present (could be dynamic)
    expect(within(usps).getAllByRole('listitem')).toHaveLength(3);
  });
});
