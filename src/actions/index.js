import 'whatwg-fetch';
import { apiEndPoints, ActionTypes } from 'constants';
import { filterData } from 'utils';

//  async action to fetch the product details
export const getProductDetails = () => (dispatch) =>
  fetch(apiEndPoints.getProductDetails)
    .then(response => response.json())
    .then(products => {
      dispatch(setProductDetails(products));
      dispatch(filterProductDetails());
    });

//  Action to set the product details in store
export function setProductDetails(productsList) {
  return {
    type: ActionTypes.SET_PPRODUCT_DETAILS,
    productsList,
  };
}

//  Action to set filtered product details in store
export function setFilteredData(filteredProductList) {
  return {
    type: ActionTypes.SET_FILTERED_PRODUCT_DETAILS,
    filteredProductList,
  };
}

// Action to filter the product details based on selected selected size
export const filterProductDetails = (selectedFilter = '') => (dispatch, getState) => {
  const { productsList } = getState();
  const filteredDetails = filterData(selectedFilter, productsList);
  dispatch(setFilteredData(filteredDetails));
};
