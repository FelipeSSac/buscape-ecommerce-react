import styled from 'styled-components';

export const ShopItemContainer = styled.article`
  width: 90%;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #FFFFFF;
  border-radius: 0.2rem;
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.1);

  .shop-item--galery{
    width: 4rem;
    height: 20rem;
    z-index: 1;

    li{
      width: 4rem;
      height: 4rem;

      display: flex;
      justify-content: center;
      align-items: center;

      list-style-type: none;
      border: 1px solid #333
    }

    li + li{
      margin-top: 1rem;
    }

    img{
      width: 3rem;
    }
  }

  .shop-item--main-image{
    width: 25rem;
  }

  .shop-item--name{
    color: #333;
    font-size: 2rem;
    font-weight: lighter;
  }

  .shop-item--details-container{
    width: 35rem;
    height: 25rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .shop-item--best-price-tag{
    width: 10rem;
    height: 1.3rem;
    margin-top: 1rem;
    padding: 0.3rem 0;
    position: relative;

    background: #048EE2;
    text-align: center;
    color: #fff;
    border-radius: 0.2rem;

    &::after {
      content: "";
      margin-top: -1rem;
      height: 0;
      width: 0;
      position: absolute;
      left: 99.3%;
      top: 50%;

      border: solid transparent;
      border-radius: 0.2rem 0 0 0.2rem;
      pointer-events: none;
      border-color: rgba(4, 142, 226, 0);
      border-left-color: #048EE2;
      border-width: 1rem;
    }
  }

  .shop-item--installments-container{
    margin-top: 3rem;
  }

  .shop-item--installments{
    display: inline;

    color: #11B346;
    font-size: 1.5rem;
  }

  .shop-item--installments-value{
    display: inline;

    color: #11B346;
    font-size: 2rem;
  }

  .shop-item--button-add{
    width: 12rem;
    height: 2.5rem;

    display: inline;

    background-color: #11B346;
    font-weight: bold;
    font-size: 1.1rem;
    border-radius: 0.2rem;
    color: #fff;
    border: 0;
    outline: none;
  }

  .shop-item--value{
    display: inline;

    color: #11B346;
  }

  @media (min-width:691px) and (max-width:1141px){
    .shop-item--main-image{
      width: 17rem;
    }
  }

  /* @media (min-width:691px) and (max-width:999px){
    .shop-item--main-image{
      width: 14rem;
    }
  } */

  @media (max-width:690px){
    .shop-item--galery{
      display: none;
    }

    .shop-item--main-image{
      width: 12rem;
    }
  }
`;
