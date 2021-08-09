import { Header } from '../Header';

import { CartList } from '../../Organism/CartList';

export default function Layout() {
  return (
    <>
      <Header />
      <CartList />
      <main>Body</main>
      <footer>footer</footer>
    </>
  );
}
