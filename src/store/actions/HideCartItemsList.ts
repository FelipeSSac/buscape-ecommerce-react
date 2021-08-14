import { IState } from '../state';

export default function HideCartItemsList(state:IState) {
  if (state.showCartItemsList === false) return state;

  return ({
    ...state,
    showCartItemsList: false,
  });
}
