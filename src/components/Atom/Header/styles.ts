import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 80px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 3;

  background: #FFCE00;
  box-shadow: 0 -15px 20px;

  .header--content{
    width: 90%;
    max-width: 78rem;
    height: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header--logo{
    width: 6rem;
  }

  .header--drop-down-menu{
    width: 48px;
  }
`;
