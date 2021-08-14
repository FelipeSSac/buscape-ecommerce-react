import { CartButton } from '../../Molecule/CartButton';

import Logo from '../../../assets/images/logo.png';

import { HeaderContainer } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <div className="header__content">
        <a href="/">
          <img src={Logo} alt="Buscapé" className="header__logo" />
        </a>
        <CartButton />
      </div>
    </HeaderContainer>
  );
}
