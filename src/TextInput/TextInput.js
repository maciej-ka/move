import React, { Component } from 'react'

class TextInput extends Component {
  constructor() {
    super()
    this.state = {
      text: 'hello world!',
      caret: null
    }
  }

  handleKey(event) {
    if(this.state.caret === null) return
    this.setState({
      ...this.state,
      text: this.state.text.substring(0,this.state.caret) + event.key + this.state.text.substring(this.state.caret),
      caret: this.state.caret + 1
    })
  }

  handleClick(event) {
    const pt = this.refs.svg.createSVGPoint();
    pt.x = event.clientX;
    pt.y = event.clientY;
    this.setState({
      ...this.state,
      caret: this.refs.text.getCharNumAtPosition(pt)
    })

    console.log(this.refs.text.getExtentOfChar(3));
  }

  renderCaret() {
  }

  render() {
    return (
      <div tabIndex='0' onKeyDown={(event) => this.handleKey(event)} >
        <svg ref='svg'>
          <text ref='text' x='360' y='470' onClick={(event) => this.handleClick(event)}>{this.state.text}</text>
          {this.renderCaret}
        </svg>
        <div>
          {JSON.stringify(this.state)}
        </div>
      </div>
    )
  }
}

export default TextInput

// get position of char:
// https://www.w3.org/TR/SVG/text.html#__svg__SVGTextContentElement__getStartPositionOfChar
