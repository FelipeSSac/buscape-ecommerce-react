import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { ActionTypes, ICartItem } from '../../../store';

import { ExcludeButtonContainer } from './styles';

interface IExcludeItemButtonProps {
  item: ICartItem;
}

export default function ExcludeItemButton({ item }:IExcludeItemButtonProps) {
  const dispatch = useDispatch();

  const handleCartRemoveItem = (event: MouseEvent<HTMLButtonElement>, selectedItem:ICartItem) => {
    event.stopPropagation();

    dispatch({ type: ActionTypes.removeFromCart, selectedItem });
  };

  return (
    <ExcludeButtonContainer
      data-testid="cart-item__exclude-button"
      onClick={(event) => handleCartRemoveItem(event, item)}
    >
      <span className="exclude-bar exclude-bar--1" />
      <span className="exclude-bar exclude-bar--2" />
    </ExcludeButtonContainer>
  );
}
