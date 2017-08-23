import React, { Component } from 'react'

class DraggableSVG extends Component {
  select(event, id) {
    const {clientX, clientY} = event
    this.setState({
      ...this.state,
      selection: {
        x: this.state.data[id].x,
        y: this.state.data[id].y,
        clientX,
        clientY,
        id
      }
    })
  }

  move(event) {
    const {selection, data} = this.state
    if(!selection) return
    const {clientX, clientY} = event
    const selected = data[selection.id]
    selected.x = selection.x - selection.clientX + clientX
    selected.y = selection.y - selection.clientY + clientY
    this.setState({
      ...this.state,
      data
    })
  }

  deselect() {
    this.setState({
      ...this.state,
      selection: null
    })
  }

  constructor() {
    super()
    this.state = {
      selection: null,
      data: {
        1: {
          id: 1,
          name: 'Object A',
          fields: [
            'field 1',
            'field 2'
          ],
          x: 20,
          y: 20
        },
        2: {
          id: 2,
          name: 'Object B',
          fields: [
            'field 1',
            'field 2'
          ],
          x: 20,
          y: 120
        }
      }
    }
  }

  render() {
    return (
      <div>
        <svg ref='svg' onMouseUp={() => this.deselect()} onMouseMove={(event) => this.move(event)}>
          {Object.values(this.state.data).map(data =>
            <rect onMouseDown={(event) => this.select(event, data.id)} key={data.id} x={data.x} y={data.y} width='80' height='80' style={{fill: 'hsla(0, 0%, 0%, 0.5)'}} />
          )}
        </svg>
        <div>
          {JSON.stringify(this.state)}
        </div>
      </div>
    )
  }
}

export default DraggableSVG
