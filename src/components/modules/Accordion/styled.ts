import styled from 'styled-components';

import { media } from 'styles/utils';
import { Heading } from 'common/typography';

export const AccordionContainer = styled.div`
  width: 100%;
  margin: 40px 0 80px;
`;

export const AccordionHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

export const AccordionTitle = styled(Heading)`
  font-size: 28px;
  line-height: 38px;
  margin: 0;

  ${media.tablet`
    font-size: 40px;
    line-height: 56px;
  `}
`;
