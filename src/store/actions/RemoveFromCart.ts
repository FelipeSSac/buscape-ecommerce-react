import { IState, IAction } from '..';

export default function RemoveFromCart(state:IState, action:IAction) {
  const find = state.cartItems.find((item) => item.id === action.selectedItem.id);

  if (!find || find.quantity === 1) {
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
          (item.price.value * finalQuantity).toFixed(2),
        );
        const finalInstallmentsValue = parseFloat(
          (item.price.installmentValue * finalQuantity).toFixed(2),
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
