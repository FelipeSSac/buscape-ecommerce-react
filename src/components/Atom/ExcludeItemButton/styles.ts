import styled from 'styled-components';

export const ExcludeButtonContainer = styled.button`
  width: 30px;
  height: 30px;

  grid-area: exclude-button;
  justify-self: flex-end;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background: transparent;
  transition: border 0.2s ease-in-out, filter 0.2s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 4px;

  &:hover{
    border: 1px solid rgba(255, 255, 255, 1);
    filter: drop-shadow(0 0 2px white);
  }

  .exclude-bar{
    width: 30px;
    height: 3px;

    border-radius: 2px;
    background: #000;
  }

  .exclude-bar--1{
    transform: translate(0, 7px) rotateZ(-45deg);
  }

  .exclude-bar--2{
    transform: translate(0, -7px) rotateZ(45deg);
  }
`;
