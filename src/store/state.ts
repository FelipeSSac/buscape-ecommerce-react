export interface ICartItem {
  id: number;
  name: string;
  images: Array<string>;
  price: {
    value: number;
    installments: number;
    installmentValue: number;
  }
}

export interface IState {
  cartItems: Array<ICartItem>;
  showCartItemsList: boolean;
}
