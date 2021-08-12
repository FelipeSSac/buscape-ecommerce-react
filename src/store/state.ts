export interface ICartItem {
  id: number;
  name: string;
  images: Array<string>;
  quantity: number;
  price: {
    singleValue: number;
    value: number;
    installments: number;
    singleInstallmentValue: number;
    installmentValue: number;
  }
}

export interface IState {
  cartItems: Array<ICartItem>;
  showCartItemsList: boolean;
}
