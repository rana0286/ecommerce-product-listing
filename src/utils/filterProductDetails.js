export const filterData = (selectedFilter, products = []) => {
  return selectedFilter ?
    products.filter(product => product.size.includes(selectedFilter)):
    products;
};
