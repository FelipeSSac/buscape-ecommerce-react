import { IState, IAction } from '..';

export default function RemoveFromCart(state:IState, action:IAction) {
  const selectedProduct = state.cartItems.find((item) => item.id === action.selectedItem.id);

  if (!selectedProduct) {
    return state;
  }

  if (selectedProduct.quantity === 1) {
    const nextStateCartItems = state.cartItems.filter((item) => (
      item !== action.selectedItem
    ));

    return ({
      ...state,
      cartItems: [...nextStateCartItems],
    });
  }

  return ({
    ...state,
    cartItems: state.cartItems.map((item) => {
      if (item.id === action.selectedItem.id) {
        const finalQuantity = item.quantity - 1;

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
