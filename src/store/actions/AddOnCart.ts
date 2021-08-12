import { IState, IAction } from '..';

export default function AddOnCart(state:IState, action:IAction) {
  const existInCart = state.cartItems.find((item) => item.id === action.selectedItem.id);

  if (existInCart) {
    return ({
      ...state,
      cartItems: state.cartItems.map((item) => {
        if (item.id === action.selectedItem.id) {
          const finalQuantity = item.quantity + 1;

          const finalValue = parseFloat(
            (item.price.singleValue * finalQuantity).toFixed(2),
          );
          const finalInstallmentsValue = parseFloat(
            (item.price.singleInstallmentValue * finalQuantity).toFixed(2),
          );

          return {
            ...item,
            quantity: finalQuantity,
            price: {
              ...item.price,
              value: finalValue,
              installmentValue: finalInstallmentsValue,
            },
          };
        }
        return { ...item };
      }),
    });
  }

  return ({
    ...state,
    cartItems: [...state.cartItems, {
      ...action.selectedItem,
      quantity: 1,
      price: {
        ...action.selectedItem.price,
        singleValue: action.selectedItem.price.value,
        singleInstallmentValue: action.selectedItem.price.installmentValue,
      },
    }],
  });
}
