export interface IAction {
  type: string;
  selectedItem: string;
}

export const ActionTypes = {
  showCartItemsList: 'showCartItemsList',
  addOnCart: 'addOnCart',
  removeFromCart: 'removeFromCart',
};
