import { useSelector } from 'react-redux';
import { IState } from '../../../store';

import { ExcludeItemButton } from '../../Molecule/ExcludeItemButton';

import { CartListContainer, CartItemContainer } from './styles';
import EmptyCart from '../../../assets/images/empty-cart.svg';

import { EnsureCurrency } from '../../../helpers/EnsureCurrency';
import { EnsureSubtotal } from '../../../helpers/EnsureSubtotal';

export default function CartList() {
  const showList = useSelector((store: IState) => store.showCartItemsList);
  const cartListItems = useSelector((store: IState) => store.cartItems);

  const { subtotalCurrency, installmentValueCurrency } = EnsureSubtotal(cartListItems);

  return (
    <CartListContainer
      className={`${showList ? ('show-list') : ('hide-list')}`}
    >
      {cartListItems.length === 0 ? (
        <div className="cart-list-empty-container">
          <h1 className="cart-list-empty-title">
            Seu carrinho ainda está vazio
          </h1>
          <h3 className="cart-list-empty-subtitle">
            <img className="cart-list-empty-image" src={EmptyCart} alt="Empty cart" />
            seus produtos selecionados aparecerão aqui
          </h3>
        </div>
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
                <dd>
                  Quantidade:
                  {' '}
                  {item.quantity}
                </dd>
                <ExcludeItemButton item={item} />
              </CartItemContainer>
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
