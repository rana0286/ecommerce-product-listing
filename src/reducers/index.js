import { combineReducers } from 'redux';
import { ActionTypes } from 'constants';

//  Pure function reducer used to set the product details in state

export function productsList(state = [], action = {}) {
  switch (action.type) {
  case ActionTypes.SET_PPRODUCT_DETAILS:
    return [...action.productsList];

  default:
    return state;
  }
}

//  Pure function reducer used to set the filtered product details in state

export function filteredProductList(state = [], action = {}) {
  switch (action.type) {
  case ActionTypes.SET_FILTERED_PRODUCT_DETAILS:
    return [...action.filteredProductList];

  default:
    return state;
  }
}

const appReducer = combineReducers({
  productsList,
  filteredProductList,
});

export default appReducer;
