import { ActionTypes } from '../constants/action-types';

const initialState = {
  products: [
    {
      id: 1,
      title: 'Avinash',
      category: 'Develper'
    }
  ]
};

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
