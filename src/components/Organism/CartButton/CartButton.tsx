import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes, IState } from '../../../store';

import { HamburguerIcon } from '../../Molecule/HamburguerIcon';

import { CartButtonContainer } from './styles';

export default function CartButton() {
  const dispatch = useDispatch();

  const cartItems = useSelector((store: IState) => store.cartItems);
  const cartItemsCounter = cartItems.length;

  const showList = useSelector((store: IState) => store.showCartItemsList);

  const handleShowMenu = () => {
    dispatch({ type: ActionTypes.showCartItemsList });
  };

  return (
    <>
      <CartButtonContainer onClick={handleShowMenu}>
        <HamburguerIcon cartItemsCount={cartItemsCounter} show={showList} />
      </CartButtonContainer>
    </>
  );
}
