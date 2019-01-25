import React, { Component } from 'react'
import styled from 'styled-components'

const SliderStyles = styled.div`
padding: 15px;
text-align: center;

.slider-alpha {
  background: linear-gradient(to right, hsla(0,0%,100%,0) 0%, hsla(0,0%,0%,1) 100%);
}

.slider-lightness {
  background: linear-gradient(to right,
    hsla(0,0%,0%,1) 0%,
    hsla(
      ${props => props.hue},
      ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`},1) 50%,
    hsla(0,0%,100%,${props => `${props.alpha}%`}) 100%);
}

.slider-saturation {
  background: linear-gradient(to right,
    hsla(0,0%,0%,1) 0%,
    hsla(${props => props.hue},100%,50%,1) 100%);
}

.slider-hue {
  background: -webkit-linear-gradient(left,
    hsla(0, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(10, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(20, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(30, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(40, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(50, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(60, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(70, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(80, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(90, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(100, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(110, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(120, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(130, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(140, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(150, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(160, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(170, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(180, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(190, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(200, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(210, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(220, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(230, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(240, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(250, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(260, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(270, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(280, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(290, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(300, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(310, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(320, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(330, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(340, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(350, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1),
    hsla(360, ${props => `${props.saturation}%`},
      ${props => `${props.lightness}%`}, 1));
}

.slider {
  -webkit-appearance: none;
  width: 544px;
  height: 25px;
  outline: none;
  -webkit-transition: .2s;
  transition: opacity .2s;
  width: 100%;
  max-width: 444px;
  margin: 10px auto;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  border: 2px solid black;
  width: 11px;
  height: 25px;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 11px;
  height: 25px;
  cursor: pointer;
}
`;

class ColorSlider extends Component {
  state = {
    hueValue: 0,
    saturationValue: 100,
    lightnessValue: 50,
    alphaValue: 100,
  }

  handleChange = (e) => {
    const option = e.target.name;
    const val = e.target.value;
    this.setState(()=> ({
      [option]: val,
    }));
  }

  render() {
    return (
      <SliderStyles
        hue={this.state.hueValue}
        saturation={this.state.saturationValue}
        lightness={this.state.lightnessValue}
        alpha={this.state.alphaValue}
      >
      <h1>HSL Slider</h1>
      <div className="slide-container">
        <input
          type='range'
          min='1' max='360'
          className='slider slider-hue'
          name='hueValue'
          value={this.state.hueValue}
          onChange={this.handleChange}
        />
        <input
          type='range'
          min='1' max='100'
          className='slider slider-saturation'
          name='saturationValue'
          value={this.state.saturationValue}
          onChange={this.handleChange}
        />
        <input
          type='range'
          min='1' max='100'
          className='slider slider-lightness'
          name='lightnessValue'
          value={this.state.lightnessValue}
          onChange={this.handleChange}
        />
        {/* <input
          type='range'
          min='1' max='100'
          className='slider slider-alpha'
          name='alphaValue'
          value={this.state.alphaValue}
          onChange={this.handleChange}
        /> */}
      </div>
    </SliderStyles>
    )
  }
}

export default ColorSlider
