import * as i from 'types';

import PrimeLayout from 'layouts/PrimeLayout';
import { Employees, Navigation } from 'modules';

const Team: i.NextPageComponent = () => {
  return (
    <>
      <Navigation
        navigationItems={[
          {
            label: 'Home',
            url: '/',
          },
          {
            label: 'Team',
            url: '/team',
          },
          {
            label: 'Contact',
            url: '/contact',
          },
        ]}
      />
      <Employees />
    </>
  );
};

Team.layout = (page, pageProps) => {
  return <PrimeLayout>{page}</PrimeLayout>;
};

export default Team;
