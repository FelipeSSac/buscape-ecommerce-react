export interface IItems {
  id: number;
  name: string;
  images: Array<string>;
  price: {
    value: number;
    installments: number;
    installmentValue: number;
  }
}
