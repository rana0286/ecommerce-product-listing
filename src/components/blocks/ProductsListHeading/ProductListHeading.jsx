import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../elements/Heading';

const ProductListHeading = ({ headingLabel }) => <Heading>{headingLabel}</Heading>;

ProductListHeading.propTypes = {
  headingLabel: PropTypes.string.isRequired,
};

export default ProductListHeading;
