export interface IItemsType {
  id: number;
  name: string;
  images: Array<string>;
  price: {
    value: number;
    installments: number;
    installmentValue: number;
  }
}
