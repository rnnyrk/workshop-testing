import * as i from 'types';

import StakingIcon from 'vectors/staking.svg';
import VaultIcon from 'vectors/vault.svg';
import WealthIcon from 'vectors/wealth.svg';
import PrimeLayout from 'layouts/PrimeLayout';
import { Footer, Navigation, Usps } from 'modules';

const NAV_ITEMS = [
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
];

const Home: i.NextPageComponent = () => {
  return (
    <>
      <Navigation navigationItems={NAV_ITEMS} />
      <Usps
        title="Investment options"
        subtitle="Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla"
        uspItems={[
          {
            title: 'Vault',
            description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
            icon: <VaultIcon />,
          },
          {
            title: 'Staking',
            description: 'Nulla vitae elit libero, a pharetra cursus magna augue.',
            icon: <StakingIcon />,
          },
          {
            title: 'Wealth',
            description: 'Donec ullamcorper nulla scelerisque non metus auctor fringilla.',
            icon: <WealthIcon />,
          },
        ]}
      />
      <Footer
        text="Label A B.V. is a company registered in the Netherlands under company number 12345678, with its registered office at Koninginneweg 1, 1018, AN Amsterdam, the Netherlands."
        navigationItems={NAV_ITEMS}
      />
    </>
  );
};

Home.layout = (page, pageProps) => {
  return <PrimeLayout>{page}</PrimeLayout>;
};

export default Home;
