import { useSelector } from 'react-redux';
import { IState } from '../../../store';

import { ExcludeItemButton } from '../../Molecule/ExcludeItemButton';

import { CartListContainter, CartItemContainer } from './styles';

import Data from '../../../resources/Items/Items.json';
import { EnsureCurrency } from '../../../helpers/EnsureCurrency';

export default function CartList() {
  const showList = useSelector((store: IState) => store.showCartItemsList);

  return (
    <CartListContainter
      className={`${showList ? ('show-list') : ('hide-list')}`}
    >
      <section className="cart-list--items">
        {Data.items.map((item) => (
          <CartItemContainer>
            <strong className="cart-item--title">
              {item.product.name}
            </strong>
            <img className="cart-item--img" src={item.product.images[1]} alt={`${item.product.name}`} />
            <dd className="cart-item--installments">
              {item.product.price.installments}
              x R$
              {' '}
              {EnsureCurrency(item.product.price.installmentValue)}
            </dd>
            <dd className="cart-item--value">
              ou R$
              {' '}
              {EnsureCurrency(item.product.price.value)}
              {' '}
              à vista
            </dd>
            <ExcludeItemButton />
          </CartItemContainer>
        ))}
      </section>
      <div className="cart-list--subtotal">
        <strong>subtotal</strong>
        <hr />
        <small>10x R$XXX,XX</small>
        <br />
        <small>ou R$X.XXX,XX à vista</small>
      </div>
    </CartListContainter>
  );
}
