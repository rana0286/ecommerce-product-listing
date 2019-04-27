import React from 'react';
import PropTypes from 'prop-types';

const App = ({ data }) => <div>{data}</div>;

App.propTypes = {
  data: PropTypes.string,
};

App.defaultProps = {
  data: 'Hello World',
};

export default App;
