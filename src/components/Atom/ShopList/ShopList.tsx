import { ShopItem } from '../../Molecule/ShopItem';

import data from '../../../resources/Items/Items.json';

export default function ShopList() {
  return (
    <main>
      <section>
        {data.items.map((item) => (
          <ShopItem
            name={item.product.name}
            images={item.product.images}
            value={item.product.price.value}
            installments={item.product.price.installments}
            installmentValue={item.product.price.installmentValue}
            item={item.product}
          />
        ))}
      </section>
    </main>
  );
}
