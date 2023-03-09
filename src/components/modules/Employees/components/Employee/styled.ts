import styled from 'styled-components';

export const EmployeeContainer = styled.div`
  height: 350px;
  overflow: hidden;
  display: flex;
  align-items: center;
  position: relative;
`;

export const EmployeeContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  padding: 16px;
  color: white;
  background: rgba(0, 0, 0, .2);
  backdrop-filter: blur(10px);
  cursor: pointer;

  h3 {
    margin: 0 0 4px;
  }

  p {
    margin: 0;
  }

  &:hover {
    transition: background .2s ease-in-out;
    background: rgba(0, 0, 0, .4);
  }
`;

export const EmployeeList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const EmployeeListItemContainer = styled.li`
  strong {
    display: inline-block;
    width: 170px;

    &:first-letter {
      text-transform: uppercase;
    }
  }
`;