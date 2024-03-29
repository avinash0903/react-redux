import { ActionTypes } from '../constants/action-types';

export const setProducts = products => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: products
  };
};
export const selectedProduct = product => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product
  };
};
