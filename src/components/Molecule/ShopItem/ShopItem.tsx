import { useDispatch } from 'react-redux';

import { ActionTypes, ICartItem } from '../../../store';

interface IShopItemProps {
  name: string;
  images: string[];
  value: number;
  installments: number;
  installmentValue: number;
  item: ICartItem;
}

export default function ShopItem({
  name,
  images,
  value,
  installments,
  installmentValue,
  item,
}: IShopItemProps) {
  const dispatch = useDispatch();

  const handleCartAddItem = (selectedItem: ICartItem) => {
    dispatch({ type: ActionTypes.addOnCart, selectedItem });
  };

  return (
    <article>
      <h1>{name}</h1>
      <img src={images[1]} alt={name} />
      <h2>{value}</h2>
      <h3>{installments}</h3>
      <h3>{installmentValue}</h3>
      <button
        type="button"
        onClick={() => handleCartAddItem(item)}
      >
        Adicionar ao carrinho

      </button>
    </article>
  );
}
