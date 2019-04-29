import 'whatwg-fetch';
import { FILTER_PRODUCT_DETAILS, SET_PPRODUCT_DETAILS} from './actionTypes.js';
import { apiEndPoints } from '../constants';

export const getProductDetails = () => (dispatch) =>
  fetch(apiEndPoints.getProductDetails)
    .then(response => response.json())
    .then(products => {
      dispatch(setProductDetails(products));
      dispatch(filterProductDetails());
    });

export function setProductDetails(productsList) {
  return {
    type: 'SET_PPRODUCT_DETAILS',
    productsList,
  };
}

export function setFilteredData(filteredProductList) {
  return {
    type: 'FILTER_PRODUCT_DETAILS',
    filteredProductList,
  };
}

export const filterProductDetails = (selectedFilter = '') => (dispatch, getState) => {
  const { productsList } = getState();
  const filteredDetails = filterData(selectedFilter, productsList);
  dispatch(setFilteredData(filteredDetails));
};

export const filterData = (selectedFilter, products = []) => {
  return selectedFilter ?
    products.filter(product => product.size.includes(selectedFilter)):
    products;
};

