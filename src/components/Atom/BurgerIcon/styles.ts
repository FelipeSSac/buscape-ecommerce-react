import styled from 'styled-components';

export const BurgerIconContainer = styled.div`
  position: relative;
  top: -16px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 6px;

  .items__count-indicator{
    position: relative;
    top: 42px;
    left: -6px;
    z-index: 2;

    width: 22px;
    height: 22px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    background: #D8262D;
    color: #fff;
    font-weight: 700;
  }

  .empty-cart{
    opacity: 0;
  }

  .icon-line{
    width: 45px;
    height: 6px;

    background: #000;
    border-radius: 8px;
    transition: all 0.2s ease-in-out;
  }

  .show-icon-line--1{
    transform: translate(0, 12px) rotateZ(-45deg);
  }

  .show-icon-line--2{
    opacity: 0;
  }

  .show-icon-line--3{
    transform: translate(0, -12px) rotateZ(45deg);
  }
`;
