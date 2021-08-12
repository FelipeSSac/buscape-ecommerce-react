import { CartButton } from '../../Organism/CartButton';

import Logo from '../../../assets/images/logo.png';

import { HeaderContainer } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <div className="header--content">
        <a href="/">
          <img src={Logo} alt="Buscapé" className="header--logo" />
        </a>
        <CartButton />
      </div>
    </HeaderContainer>
  );
}
