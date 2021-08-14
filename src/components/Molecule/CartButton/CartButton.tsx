import { useDispatch } from 'react-redux';
import { ActionTypes } from '../../../store';

import { BurgerIcon } from '../../Atom/BurgerIcon';

import { CartButtonContainer } from './styles';

export default function CartButton() {
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    dispatch({ type: ActionTypes.showCartItemsList });
  };

  return (
    <CartButtonContainer onClick={handleShowMenu}>
      <BurgerIcon />
    </CartButtonContainer>
  );
}
