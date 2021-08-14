import { createStore } from 'redux';

import {
  IState, IAction, ShowCartItemsList, HideCartItemsList, AddOnCart, RemoveFromCart,
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
    case 'hideCartItemsList': {
      return HideCartItemsList(state);
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
