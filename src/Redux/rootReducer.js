import {combineReducers} from 'redux';

import cartReducer from './Cart/CartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
