import Logo from 'vectors/logo.svg';

import {
  FooterWrapper,
  FooterContainer,
  FooterTextContainer,
  FooterText,
  FooterLinkContainer,
  FooterLink,
} from './styled';

export const Footer = ({ navigationItems, text }: FooterProps) => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterTextContainer>
          <Logo />
          <FooterText margin="0" data-testid="footerText">
            {text}
          </FooterText>
        </FooterTextContainer>
        <FooterLinkContainer>
          {navigationItems.map(({ label, url }, index) => (
            <FooterLink key={`footer-link-${index}`} to={url} currentTab>
              {label}
            </FooterLink>
          ))}
        </FooterLinkContainer>
      </FooterContainer>
    </FooterWrapper>
  );
};

type FooterProps = {
  text: string;
  navigationItems: {
    label: string;
    url: string;
  }[];
};
