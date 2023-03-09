import Logo from 'vectors/logo.svg';
import { Link, Anchor } from 'common/interaction';

import { NavigationContainer, NavigationLogo, NavigationItemsContainer } from './styled';

export const Navigation = ({ navigationItems }: NavigationProps) => {
  return (
    <NavigationContainer>
      <NavigationLogo>
        <Link to="/">
          <Logo />
        </Link>
      </NavigationLogo>
      <NavigationItemsContainer>
        {navigationItems.map(({ label, url }, index) => (
          <Anchor key={`navigationItem-${index}`} to={url} currentTab>
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
