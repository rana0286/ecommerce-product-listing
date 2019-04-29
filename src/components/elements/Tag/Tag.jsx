import React from 'react';
import PropTypes from 'prop-types';

import './Tag.scss';

/**
  * @desc Tag component can be used to display tags associated with each product.
  *  This component expects two props Tag Label and tag type
  *  @tagType : can be either sale or exclusive
*/

const Tag = ({ tagLabel, tagType }) => <div className={`tag--${tagType}`}>{tagLabel}</div>;

Tag.propTypes = {
  tagLabel: PropTypes.string.isRequired,
  tagType: PropTypes.string,
};

Tag.defaultProps = {
  tagType: 'sale-tag',
};

export default Tag;
