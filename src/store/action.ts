import { ICartItem } from './state';

export interface IAction {
  type: string;
  selectedItem: ICartItem;
}

export const ActionTypes = {
  showCartItemsList: 'showCartItemsList',
  addOnCart: 'addOnCart',
  removeFromCart: 'removeFromCart',
};
