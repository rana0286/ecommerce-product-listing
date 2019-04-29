import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Dropdown.scss';

class Dropdown extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    const { value } = event.target;
    const { onSelect } = this.props;
    onSelect(value);
    this.setState({ value });
    return { value };
  }

  render() {
    const { options, className, label, ...rest} = this.props;
    const { value } = this.state;
    return (
      <div className={`select-box ${className}`}>
        <label className="select-box__label" htmlFor="select-box">
          {label}
        </label>
        <select {...rest} id="select-box" value={value} onChange={this.changeHandler} className="select-box__select">
          {options.map(option => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  className: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
};
Dropdown.defaultProps = {
  className: '',
  selected: '',
  label: '',
  value: '',
};

export default Dropdown;
