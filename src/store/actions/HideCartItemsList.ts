import { IState } from '../state';

export default function HideCartItemsList(state:IState) {
  return ({
    ...state,
    showCartItemsList: false,
  });
}
