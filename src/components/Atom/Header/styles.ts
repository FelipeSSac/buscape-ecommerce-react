import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 5rem;
  padding: 0 5rem;
  position: sticky;
  top: 0;
  z-index: 3;

  background: #FFCE00;
  box-shadow: 0 -15px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .header--logo{
    width: 6rem;
  }

  .header--drop-down-menu{
    width: 6rem;
  }
`;
