import styled from 'styled-components';

import { media } from 'styles/utils';

export const PrimeLayoutContainer = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const PrimeLayoutContent = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 16px 0;

  ${media.tablet`
    padding: 32px 0;
  `}
`;
