import Logo from 'vectors/logo.svg';
import { Link, Anchor } from 'common/interaction';

import { NavigationContainer, NavigationLogo, NavigationItemsContainer } from './styled';

export const Navigation = ({ navigationItems }: NavigationProps) => {
  return (
    <NavigationContainer role="navigation">
      <NavigationLogo>
        <Link to="/" aria-label="Navigate home">
          <Logo />
        </Link>
      </NavigationLogo>
      <NavigationItemsContainer role="menu">
        {navigationItems.map(({ label, url }, index) => (
          <Anchor key={`navigationItem-${index}`} to={url} currentTab role="menuitem">
            {label}
          </Anchor>
        ))}
      </NavigationItemsContainer>
    </NavigationContainer>
  );
};

type NavigationProps = {
  navigationItems: {
    label: string;
    url: string;
  }[];
};
