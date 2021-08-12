import { Header } from '../Header';

import { CartList } from '../../Organism/CartList';
import { ShopList } from '../ShopList';

export default function Layout() {
  return (
    <>
      <Header />
      <CartList />
      <ShopList />
    </>
  );
}
