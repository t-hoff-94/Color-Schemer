import React, { Component } from 'react'
import styled from 'styled-components'

const SwatchInfoStyles = styled.div`
  .row {
    align-items: center;
    color: #222;
    display: flex;
    justify-content: space-between;
    max-width: 500px;
    border-radius: 11px;
    height: 33px;
    margin: 0 auto;
  }
  .header {
    background: #f3f3f3;
    box-shadow: inset 2px 2px 6px rgba(0,0,0,.1);
    padding: 0 15px 0 0;
    button {
      border: 1px solid #999;
      border-radius: 50px;
      height: 33px;
      font-size: 22px;
      width: 33px;
    }
  }
`;

class SwatchInfo extends Component {
  render() {
    const { cmykColors, hexCode, rgbaColors, blackContrast } = this.props.options;
    const {color: { h, s, l, a} } = this.props;
    return (<>
      <SwatchInfoStyles>
        <div className='row header'>
          <button
            name='primaryColor'
            style = {{
              color: `${!blackContrast ? '#fff': '#000'}`,
              background: `hsla(${h},${s}%,${l}%,${a}%)`
            }}
            onClick={this.props.handleClick}
            className='swatch-box'
          >
            &#43;
          </button>
            <div>
              <pre style={{
                background: `hsla(${h},${s}%,${l}%,${a}%)`,
                color: `${!blackContrast ? '#fff': '#000'}`,
                padding: 2,
              }}>
                {hexCode}
              </pre>
            </div>
            <div>
              <pre>cmyk({cmykColors.map((c,index)=> index < 3 ? Math.round((c) * 100) + ',' : Math.round((c) * 100) )})</pre>
            </div>
            <div>
              <pre>rgba({rgbaColors.map((c,index) => index < 3 ? c+',': c)})</pre>
            </div>
        </div>
      </SwatchInfoStyles>
    </>)
  }
}

export default SwatchInfo
