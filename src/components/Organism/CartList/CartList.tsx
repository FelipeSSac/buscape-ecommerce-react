import { useSelector } from 'react-redux';
import { IState } from '../../../store';

import { ExcludeItemButton } from '../../Molecule/ExcludeItemButton';

import { CartListContainter, CartItemContainer } from './styles';

import { EnsureCurrency } from '../../../helpers/EnsureCurrency';

export default function CartList() {
  const showList = useSelector((store: IState) => store.showCartItemsList);
  const cartListItems = useSelector((store: IState) => store.cartItems);

  return (
    <CartListContainter
      className={`${showList ? ('show-list') : ('hide-list')}`}
    >
      {cartListItems.length === 0 ? (
        <div> carrinho vazio</div>
      ) : (
        <>
          <section className="cart-list--items">
            {cartListItems.map((item) => (
              <CartItemContainer key={item.id}>
                <strong className="cart-item--title">
                  {item.name}
                </strong>
                <img className="cart-item--img" src={item.images[1]} alt={`${item.name}`} />
                <dd className="cart-item--installments">
                  {item.price.installments}
                  x
                  {' '}
                  {EnsureCurrency(item.price.installmentValue)}
                </dd>
                <dd className="cart-item--value">
                  ou
                  {' '}
                  {EnsureCurrency(item.price.value)}
                  {' '}
                  à vista
                </dd>
                <ExcludeItemButton item={item} />
              </CartItemContainer>
            ))}
          </section>
          <div className="cart-list--subtotal">
            <strong>subtotal</strong>
            <hr />
            <small>10x XXX,XX</small>
            <br />
            <small>ou X.XXX,XX à vista</small>
          </div>
        </>
      )}
    </CartListContainter>
  );
}
