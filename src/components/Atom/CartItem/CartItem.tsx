import { ICartItem } from '../../../store';

import { ExcludeItemButton } from '../ExcludeItemButton';

import { EnsureCurrency } from '../../../helpers';

import { CartItemContainer } from './styles';

interface ICartItemProps {
  item: ICartItem;
}

export default function CartItem({ item }:ICartItemProps) {
  return (
    <CartItemContainer key={item.id}>
      <div className="cart-item--container">
        <img className="cart-item--img" src={item.images[0]} alt={`${item.name}`} />
        <div className="cart-item--description">
          <strong className="cart-item--title">
            {item.name}
          </strong>
          <div className="cart-item--value">
            <dd>
              Quantidade:
              {' '}
              {item.quantity}
            </dd>
            <dd>
              {item.price.installments}
              x
              {' '}
              {EnsureCurrency(item.price.installmentValue)}
            </dd>
            <dd>
              ou
              {' '}
              {EnsureCurrency(item.price.value)}
              {' '}
              à vista
            </dd>
          </div>
        </div>
      </div>
      <ExcludeItemButton item={item} />
    </CartItemContainer>
  );
}
