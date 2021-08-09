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
      return ({
        ...state,
        cartItems: [...state.cartItems, action.selectedItem],
      });
    }
    case 'removeFromCart': {
      const nextStateCartItems = state.cartItems.filter((item) => item !== action.selectedItem);
      return ({
        ...state,
        cartItems: [...nextStateCartItems],
      });
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

export default store;
