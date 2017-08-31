import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TextInput extends Component {
  componentDidMount() {
  }

  render() {
    const {
      x,
      y,
      value
    } = this.props;
    return (
      <g>
        <rect x={x} y={y} width='200' height='30' stroke='black' fill='white' />
        <text x={x} y={y}>
          {value}
        </text>
      </g>
    )
  }
}

TextInput.propTypes = {
  value: PropTypes.string,
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired,
}

export default TextInput
