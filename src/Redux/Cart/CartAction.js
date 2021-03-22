import {ADD_CART_ITEM, REMOVE_CART_ITEM} from './CartTypes';

export const addItemToCart = item => ({
  type: ADD_CART_ITEM,
  payload: item,
});

export const removeItemCart = item => ({
  type: REMOVE_CART_ITEM,
  payload: item,
});
