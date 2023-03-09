import styled from 'styled-components';

import { media } from 'styles/utils';
import { Heading, Paragraph } from 'common/typography';

export const UspContainer = styled.div`
  width: 100%;
  margin: 40px 0 80px;
`;

export const UspsHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  margin-bottom: 40px;
`;

export const UspsSubtitle = styled(Paragraph)`
  font-size: 12px;
  font-style: italic;
  margin: 0;
`;

export const UspsTitle = styled(Heading)`
  font-size: 28px;
  line-height: 38px;
  margin: 0;

  ${media.tablet`
    font-size: 40px;
    line-height: 42px;
  `}
`;

export const UspListContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  ${media.desktop`
    grid-template-columns: repeat(3, minmax(0, 1fr));
  `}
`;

export const UspListUspContainer = styled.div`
  height: 100%;
  padding: 0 30px;
  margin-bottom: unset;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const UspListUspTitle = styled(Paragraph)`
  font-size: 20px;
  font-weight: 600;
  margin: 16px 0 0;
`;

export const UspListUspDescription = styled(Paragraph)`
  font-size: 16px;
  font-weight: 500;
`;

export const UspsListUspIcon = styled.div`
  height: 72px;
  width: 72px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 40px;
    fill: ${({ theme }) => theme.colors.black};
  }

  ${media.tablet`
    height: 140px;
    width: 140px;
    border-radius: 50px;

    svg {
      width: 96px;
    }
  `}
`;
