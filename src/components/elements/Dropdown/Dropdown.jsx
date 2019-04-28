import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  onChange(event) {
    const { value } = event.target;
    const { onSelect } = this.props;
    onSelect(value);
    this.setState({ value });
    return { value };
  }

  render() {
    const { options, className, label } = this.props;
    const { value } = this.state;
    return (
      <div className={`form-group select-box ${className}`}>
        <label className="sr-only" htmlFor="select-box">
          {label}
        </label>
        <select id="select-box" value={value} onChange={onChange} className="form-control">
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
