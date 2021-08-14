import { useDispatch } from 'react-redux';
import { ActionTypes } from '../../../store';

import { EnsureCurrency } from '../../../helpers';

import { ShopItemContainer } from './styles';
import { IItems } from '../../../resources/Items/items';

interface IShopItemProps {
  item: IItems;
}

export default function ShopItem({ item }:IShopItemProps) {
  const { name, images, price } = item;

  const dispatch = useDispatch();

  const handleCartAddItem = (selectedItem: IItems) => {
    dispatch({ type: ActionTypes.addOnCart, selectedItem });
  };

  return (
    <ShopItemContainer>
      <div className="shop-item__gallery">
        {images.map((image) => (
          <li key={image}>
            <img src={image} alt={name} />
          </li>
        ))}
      </div>
      <img className="shop-item__main-image" src={images[0]} alt={name} />
      <div className="shop-item__details-container">
        <h1 className="shop-item__name">{name}</h1>
        <hr />
        <h4 className="shop-item__best-price-tag">Melhor preço</h4>
        <div className="shop-item__installments-container">
          <h3 className="shop-item__installments">
            {price.installments}
            x
            {' '}
          </h3>
          <h3 className="shop-item__installments-value">
            {EnsureCurrency(price.installmentValue)}
            {' '}
          </h3>
          <button
            type="button"
            className="shop-item__button-add"
            onClick={() => handleCartAddItem(item)}
          >
            Adicionar ao carrinho
          </button>
        </div>
        <div>
          <span>
            ou
            {' '}
          </span>
          <h4 className="shop-item__value">{EnsureCurrency(price.value)}</h4>
          <span>
            {' '}
            à vista
          </span>
        </div>
      </div>
    </ShopItemContainer>
  );
}
