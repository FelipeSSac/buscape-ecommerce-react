import { useDispatch } from 'react-redux';
import { ActionTypes, ICartItem } from '../../../store';

import { ExcludeButtonContainer } from './styles';

interface IExcludeItemButtonProps {
  item: ICartItem;
}

export default function ExcludeItemButton({ item }:IExcludeItemButtonProps) {
  const dispatch = useDispatch();

  const handleCartRemoveItem = (selectedItem:ICartItem) => {
    dispatch({ type: ActionTypes.removeFromCart, selectedItem });
  };

  return (
    <ExcludeButtonContainer onClick={() => handleCartRemoveItem(item)}>
      <span className="exclude-bar exclude-bar-1" />
      <span className="exclude-bar exclude-bar-2" />
    </ExcludeButtonContainer>
  );
}
