import styled from 'styled-components';

import { media } from 'styles/utils';
import { Link } from 'common/interaction';
import { Paragraph } from 'common/typography';

export const FooterWrapper = styled.div`
  width: 100%;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.blue};
  justify-self: flex-end;
  display: flex;
  justify-content: center;
`;

export const FooterContainer = styled.div`
  display: flex;
  max-width: 1200px;
  flex-direction: column;
  row-gap: 40px;

  ${media.tablet`
    flex-direction: row;
  `}
`;

export const FooterTextContainer = styled.div`
  flex: 3 1 0%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;

  svg {
    height: 60px;
  }
`;

export const FooterText = styled(Paragraph)`
  font-size: 18px;
  line-height: 35px;
  color: ${({ theme }) => theme.colors.white};
`;

export const FooterLinkContainer = styled.div`
  flex: 3 1 0%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 20px;

  ${media.tablet`
    justify-content: center;
    padding-left: 80px;
  `}
`;

export const FooterLink = styled(Link)`
  width: fit-content;
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  text-decoration: none;
`;
