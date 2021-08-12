import { useSelector } from 'react-redux';
import { IState } from '../../../store';

import { CartItem } from '../../Molecule/CartItem';

import { CartListContainer } from './styles';
import EmptyCart from '../../../assets/images/empty-cart.svg';

import { EnsureSubtotal } from '../../../helpers';

export default function CartList() {
  const showList = useSelector((store: IState) => store.showCartItemsList);
  const cartListItems = useSelector((store: IState) => store.cartItems);

  const { subtotalCurrency, installmentValueCurrency } = EnsureSubtotal(cartListItems);

  return (
    <CartListContainer
      className={`${showList ? ('show-list') : ('hide-list')}`}
    >
      {cartListItems.length === 0 ? (
        <section className="cart-list--items">
          <div className="cart-list-empty-container">
            <h1 className="cart-list-empty-title">
              Seu carrinho ainda está vazio
            </h1>
            <h3 className="cart-list-empty-subtitle">
              <img className="cart-list-empty-image" src={EmptyCart} alt="Empty cart" />
              seus produtos selecionados aparecerão aqui
            </h3>
          </div>
        </section>
      ) : (
        <>
          <section className="cart-list--items">
            {cartListItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}
          </section>
          <div className="cart-list--subtotal">
            <strong>subtotal</strong>
            <hr />
            <small>
              10x
              {' '}
              {installmentValueCurrency}
            </small>
            <br />
            <small>
              ou
              {' '}
              {subtotalCurrency}
              {' '}
              à vista
            </small>
          </div>
        </>
      )}
    </CartListContainer>
  );
}
