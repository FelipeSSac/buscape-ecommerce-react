import styled from 'styled-components';

export const CartListContainter = styled.div`
  width: 100%;
  height: 50rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  opacity: 0;
  visibility: hidden;
  position: absolute;

  background-color: #DBB000;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;

  &.show-list{
    opacity: 1;
    visibility: visible;
  }

  .cart-list--items{
    height: 100%;
    max-height: 39.4rem;

    overflow: auto;
  }

  .cart-list--subtotal{
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

export const CartItemContainer = styled.article`
  height: 8rem;
  padding: 0.8rem 2rem;
  margin-top: 0.2rem;

  display: grid;
  grid-gap: 0.2rem;
  grid-template-columns: 8rem 20rem auto auto;
  grid-template-rows: auto;
  grid-template-areas:
    "img title . . exclude-button"
    "img installments . . ."
    "img value . . ."
  ;

  background: #CBA300;

  .cart-item--img {
    width: 7rem;

    grid-area: img;
    align-self: center;

    border: 1px solid #000;
  }

  .cart-item--title{
    width: 20rem;

    grid-area: title;
    align-self: center;

    color: #fff;
  }

  .cart-item--installments{
    width: 10rem;
    height: 1rem;

    grid-area: installments;
    align-self: flex-end;

    font-weight: bold;
  }

  .cart-item--value{
    width: 10rem;
    height: 1rem;

    grid-area: value;
    align-self: flex-start;

    font-weight: bold;
  }
`;
