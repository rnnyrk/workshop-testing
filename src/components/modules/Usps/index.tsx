import {
  UspContainer,
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
    <UspContainer>
      <UspsHeader>
        <UspsTitle>{title}</UspsTitle>
        <UspsSubtitle>{subtitle}</UspsSubtitle>
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
    </UspContainer>
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
