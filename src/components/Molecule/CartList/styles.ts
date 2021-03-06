import styled from 'styled-components';

export const CartListContainer = styled.div`
  width: 100%;
  height: 0;
  position: fixed;
  top: 80px;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  opacity: 0;
  position: absolute;

  background-color: #DBB000;
  transition: opacity 0.2s ease-in-out, height 0.2s ease-in-out;

  &.show-list{
    height: 50rem;
    position: fixed;

    opacity: 1;
  }

  .cart-list__empty-container{
    width: 100%;
    max-width: 80rem;
    margin: 10rem auto;

    color: #fff;
    text-align: center;

    .cart-list__empty-image{
      height: 4rem;
    }

    .cart-list__empty-subtitle{
      margin-top: 2rem;
      align-items: center;
    }
  }

  .cart-list__items{
    height: 100%;
    max-height: 39.4rem;

    overflow: auto;
  }

  .cart-list__subtotal{
    padding: 2rem 3rem;

    text-align: right;
    font-weight: 700;

    hr {
      height: 1px;

      background: #000;
      border: none;
    }
  }
`;
