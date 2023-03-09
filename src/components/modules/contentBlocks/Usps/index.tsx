import { Page } from 'layouts/PrimeLayout';

import {
  UspsHeader,
  UspsSubtitle,
  UspsTitle,
  UspListContainer,
  UspListUspContainer,
  UspListUspTitle,
  UspListUspDescription,
  UspsListUspIcon,
} from './styled';

export const Usps = ({ title, subtitle, uspItems }: UspsProps) => {
  return (
    <Page.Component>
      <UspsHeader>
        <UspsSubtitle>{subtitle}</UspsSubtitle>
        <UspsTitle>{title}</UspsTitle>
      </UspsHeader>
      <UspListContainer>
        {uspItems.map(({ description, icon, title }, index) => (
          <UspListUspContainer key={`usp-${index}`}>
            <UspsListUspIcon>{icon}</UspsListUspIcon>
            <UspListUspTitle>{title}</UspListUspTitle>
            <UspListUspDescription>{description}</UspListUspDescription>
          </UspListUspContainer>
        ))}
      </UspListContainer>
    </Page.Component>
  );
};

type UspsProps = {
  title: string;
  subtitle: string;
  uspItems: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
};
