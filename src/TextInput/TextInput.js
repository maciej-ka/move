import React, { Component, PropTypes } from 'react'

class TextInput extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <text x='360' y='470'>
        {this.props.value}
      </text>
    )
  }
}

TextInput.propTypes = {
  value: PropTypes.string,
}

export default TextInput
