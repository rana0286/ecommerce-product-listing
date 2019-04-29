import { combineReducers } from 'redux';

export function productsList(state = [], action) {
  switch (action.type) {
  case 'SET_PPRODUCT_DETAILS':
    return [...action.productsList];

  default:
    return state;
  }
}

export function filteredProductList(state = [], action) {
  switch (action.type) {
  case 'FILTER_PRODUCT_DETAILS':
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
