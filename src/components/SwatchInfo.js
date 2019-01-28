import React, { Component } from 'react'
import styled from 'styled-components'

const SwatchInfoStyles = styled.div`
  align-items: center;
  background: #f3f3f3;
  box-shadow: 0 0 20px 0px #999;
  color: #222;
  display: flex;
  justify-content: space-between;
  padding: 0 15px 0 0;
  max-width: 500px;
  margin: 25px auto;
  border-radius: 25px;
  height: 33px;;
  button {
    border: 1px solid #999;
    border-radius: 50px;
    height: 33px;
    font-size: 22px;
    width: 33px;
  }
`;



class SwatchInfo extends Component {
  render() {
    console.log(this.props.options.rgbaColors)
    const {color: { h, s, l, a} } = this.props;
    return (
      <SwatchInfoStyles>
        <button
          name='primaryColor'
          style = {{
            background: `hsla(${h},${s}%,${l}%,${a}%)`
          }}
          onClick={this.props.handleClick}
          className='swatch-box'
        >
          &#43;
        </button>
          <div>
            <p>{this.props.options.hexCode}</p>
          </div>
          <div>
            <p>cmyk({this.props.options.cmykColors.map(c=> Math.round(c * 100) +',')})</p>
          </div>
          <div>
            <p>rgba({this.props.options.rgbaColors.map(c => c+',')})</p>
          </div>
      </SwatchInfoStyles>
    )
  }
}

export default SwatchInfo
