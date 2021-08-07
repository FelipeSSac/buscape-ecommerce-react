import { HamburguerIconContainer } from './styles';

interface IHamburguerIconProps { hide?: boolean, cartItemsCount?:number }

export default function HamburguerIcon({ hide, cartItemsCount }: IHamburguerIconProps) {
  return (
    <HamburguerIconContainer>
      <span className={`items-count-indicator${!cartItemsCount ? ' empty-cart' : ''}`}>{cartItemsCount}</span>
      <span className={`icon-line${hide ? ' hide--icon-line-1' : ''}`} />
      <span className={`icon-line${hide ? ' hide--icon-line-2' : ''}`} />
      <span className={`icon-line${hide ? ' hide--icon-line-3' : ''}`} />
    </HamburguerIconContainer>
  );
}

HamburguerIcon.defaultProps = { hide: false, cartItemsCount: null };
