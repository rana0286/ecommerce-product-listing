import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Heading.scss';

class Heading extends PureComponent {
  render() {
    const { children, variation: Variation, ...rest } = this.props;

    return (
      <Variation {...rest} className={`heading heading--${Variation}`}>
        {children}
      </Variation>
    );
  }
}

Heading.defaultProps = {
  variation: 'h1',
};

Heading.propTypes = {
  /** Sets the children */
  children: PropTypes.node.isRequired,
  /** Sets the variation */
  variation: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
};

export default Heading;
