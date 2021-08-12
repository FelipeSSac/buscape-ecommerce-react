import { IState } from '..';

export default function ShowCartItemsList(state:IState) {
  return ({
    ...state,
    showCartItemsList: !state.showCartItemsList,
  });
}
