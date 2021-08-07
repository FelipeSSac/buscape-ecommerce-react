import { useState } from 'react';

import { HamburguerIcon } from '../../Molecule/HamburguerIcon';

import { CartButtonContainer } from './styles';

export default function CartButton() {
  const [showNavBarMenu, setShowNavBarMenu] = useState(false);

  const handleShowMenu = () => {
    setShowNavBarMenu((prevState) => !prevState);
  };

  return (
    <CartButtonContainer onClick={handleShowMenu}>
      <HamburguerIcon hide={showNavBarMenu} cartItemsCount={1} />
      <nav className="navigation-bar">
        <li className="navigation-bar--item">item1</li>
        <li className="navigation-bar--item">item2</li>
        <li className="navigation-bar--item">item3</li>
        <li className="navigation-bar--item">item4</li>
      </nav>
    </CartButtonContainer>
  );
}
