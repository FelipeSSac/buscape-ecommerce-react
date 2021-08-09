import { HamburguerIconContainer } from './styles';

interface IHamburguerIconProps { show?: boolean, cartItemsCount?:number }

export default function HamburguerIcon({ show, cartItemsCount }: IHamburguerIconProps) {
  return (
    <HamburguerIconContainer>
      <span className={`items-count-indicator${!cartItemsCount ? ' empty-cart' : ''}`}>{cartItemsCount}</span>
      <span className={`icon-line${show ? ' show--icon-line-1' : ''}`} />
      <span className={`icon-line${show ? ' show--icon-line-2' : ''}`} />
      <span className={`icon-line${show ? ' show--icon-line-3' : ''}`} />
    </HamburguerIconContainer>
  );
}

HamburguerIcon.defaultProps = { show: false, cartItemsCount: null };
