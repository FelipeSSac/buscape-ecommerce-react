import { createStore } from 'redux';

import { IState, IAction } from '.';

const initialState: IState = {
  cartItems: [],
  showCartItemsList: false,
};

const reducer = (state = initialState, action:IAction) => {
  switch (action.type) {
    case 'showCartItemsList': {
      return ({
        ...state,
        showCartItemsList: !state.showCartItemsList,
      });
    }
    case 'addOnCart': {
      const find = state.cartItems.find((item) => item.id === action.selectedItem.id);

      if (find) {
        return ({
          ...state,
          cartItems: state.cartItems.map((item) => (item.id === action.selectedItem.id ? (
            {
              ...item,
              quantity: item.quantity + 1,
              price: {
                value: item.price.value * (item.quantity + 1),
                installments: item.price.installments,
                installmentValue: item.price.installmentValue * (item.quantity + 1),
              },
            }
          ) : (
            { ...item }
          ))),
        });
      }

      return ({
        ...state,
        cartItems: [...state.cartItems, { ...action.selectedItem, quantity: 1 }],
      });
    }
    case 'removeFromCart': {
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
        cartItems: state.cartItems.map((item) => (item.id === action.selectedItem.id ? (
          {
            ...item,
            quantity: item.quantity - 1,
            price: {
              value: item.price.value * (item.quantity - 1),
              installments: item.price.installments,
              installmentValue: item.price.installmentValue * (item.quantity - 1),
            },
          }
        ) : (
          { ...item }
        ))),
      });
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

export default store;
