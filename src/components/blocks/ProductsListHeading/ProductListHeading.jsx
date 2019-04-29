import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../../elements';

const ProductListHeading = ({ headingLabel }) => <Heading variation="h2">{headingLabel}</Heading>;

ProductListHeading.propTypes = {
  headingLabel: PropTypes.string.isRequired,
};

export default ProductListHeading;
