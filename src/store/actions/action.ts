import { ICartItem } from '../state';

export interface IAction {
  type: string;
  selectedItem: ICartItem;
}

export const ActionTypes = {
  showCartItemsList: 'showCartItemsList',
  hideCartItemsList: 'hideCartItemsList',
  addOnCart: 'addOnCart',
  removeFromCart: 'removeFromCart',
};
