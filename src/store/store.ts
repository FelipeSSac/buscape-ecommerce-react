import { createStore } from 'redux';

import {
  IState, IAction, ShowCartItemsList, AddOnCart, RemoveFromCart,
} from '.';

const initialState: IState = {
  cartItems: [],
  showCartItemsList: false,
};

const reducer = (state = initialState, action:IAction) => {
  switch (action.type) {
    case 'showCartItemsList': {
      return ShowCartItemsList(state);
    }
    case 'addOnCart': {
      return AddOnCart(state, action);
    }
    case 'removeFromCart': {
      return RemoveFromCart(state, action);
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

export default store;
