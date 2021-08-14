import { Header } from '../Header';

import { CartList } from '../../Molecule/CartList';
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
