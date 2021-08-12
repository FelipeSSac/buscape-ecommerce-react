import { useDispatch } from 'react-redux';
import { ActionTypes } from '../../../store';

import { EnsureCurrency } from '../../../helpers/EnsureCurrency';

import { ShopItemContainer } from './styles';
import { IItemsType } from '../../../resources/Items/items';

interface IShopItemProps {
  item: IItemsType;
}

export default function ShopItem({ item }:IShopItemProps) {
  const { name, images, price } = item;

  const dispatch = useDispatch();

  const handleCartAddItem = (selectedItem: IItemsType) => {
    dispatch({ type: ActionTypes.addOnCart, selectedItem });
  };

  return (
    <ShopItemContainer>
      <div className="shop-item--galery">
        {images.map((image) => (
          <li>
            <img key={`${image}321${name}`} src={image} alt={name} />
          </li>
        ))}
      </div>
      <img className="shop-item--main-image" src={images[0]} alt={name} />
      <div className="shop-item--details-container">
        <h1 className="shop-item--name">{name}</h1>
        <hr />
        <h4 className="shop-item--best-price-tag">Melhor preço</h4>
        <div className="shop-item--installments-container">
          <h3 className="shop-item--installments">
            {price.installments}
            x
            {' '}
          </h3>
          <h3 className="shop-item--installments-value">
            {EnsureCurrency(price.installmentValue)}
            {' '}
          </h3>
          <button
            type="button"
            className="shop-item--button-add"
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
          <h4 className="shop-item--value">{EnsureCurrency(price.value)}</h4>
          <span>
            {' '}
            à vista
          </span>
        </div>
      </div>
    </ShopItemContainer>
  );
}
