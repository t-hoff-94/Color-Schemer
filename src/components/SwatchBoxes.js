import React, { Component } from 'react'
import styled from 'styled-components'

const SwatchBoxesStyles = styled.div`
  button {
    height: 55px;
    width: 55px;
  }
`;



class SwatchBoxes extends Component {
  render() {
    const {color: { h, s, l, a} } = this.props;
    return (
      <SwatchBoxesStyles>
        <button
          style = {{
            background: `hsla(${h},${s}%,${l}%,${a}%)`
          }}
          onClick={this.props.handleClick}
          className='swatch-box'
        >
        </button>
        <button
          style = {{

          }}
          onClick={this.props.handleClick}
          className='swatch-box'
        >
        </button>
      </SwatchBoxesStyles>
    )
  }
}

export default SwatchBoxes
