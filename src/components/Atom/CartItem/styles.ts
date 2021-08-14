import styled from 'styled-components';

export const CartItemContainer = styled.article`
  height: 8rem;
  padding: 0.8rem 2rem;
  margin-top: 0.2rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  background: #CBA300;

  .cart-item--container{
    height: 8rem;
    width: 29rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cart-item--description{
    height: 90%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .cart-item--img {
    width: 7rem;

    border: 1px solid #000;
  }

  .cart-item--title{
    width: 20rem;

    color: #fff;
  }

  .cart-item--installments{
    font-weight: bold;
  }

  .cart-item--value{
    font-weight: bold;
  }

  .cart-item--quantity{
    font-weight: bold;
  }
`;
