import { useSelector } from 'react-redux';
import { IState } from '../../../store';

import { BurgerIconContainer } from './styles';

export default function BurgerIcon() {
  const show = useSelector((store: IState) => store.showCartItemsList);
  const cartItemsList = useSelector((store: IState) => store.cartItems);

  const cartItemsCount = cartItemsList.length;

  return (
    <BurgerIconContainer>
      <span className={`items__count-indicator${!cartItemsCount ? ' empty-cart' : ''}`}>{cartItemsCount}</span>
      <span className={`icon-line${show ? ' show-icon-line--1' : ''}`} />
      <span className={`icon-line${show ? ' show-icon-line--2' : ''}`} />
      <span className={`icon-line${show ? ' show-icon-line--3' : ''}`} />
    </BurgerIconContainer>
  );
}

BurgerIcon.defaultProps = { show: false, cartItemsCount: null };
