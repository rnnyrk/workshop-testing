import { PrimeLayoutContainer, PrimeLayoutContent } from './styled';

export const PrimeLayout = ({ children }: PrimeLayoutProps) => {
  return (
    <PrimeLayoutContainer>
      <PrimeLayoutContent>{children}</PrimeLayoutContent>
    </PrimeLayoutContainer>
  );
};

type PrimeLayoutProps = {
  children: React.ReactNode;
};

export default PrimeLayout;
