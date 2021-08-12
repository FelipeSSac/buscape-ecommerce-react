import { ShopItem } from '../../Molecule/ShopItem';

import data from '../../../resources/Items/Items.json';

import { SectionShopContainer } from './styles';

export default function ShopList() {
  return (
    <main>
      <SectionShopContainer>
        {data.items.map(({ product }) => (
          <ShopItem
            item={product}
          />
        ))}
      </SectionShopContainer>
    </main>
  );
}