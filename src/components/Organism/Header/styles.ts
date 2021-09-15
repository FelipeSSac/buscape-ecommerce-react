import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 3;

  background: #FFCE00;
  box-shadow: 0 -15px 20px;

  .header__content{
    width: 90%;
    max-width: 78rem;
    height: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__logo{
    width: 6rem;
  }
`;
