import React, { Component } from 'react'
import styled from 'styled-components'
import Sliders from './Sliders'

const SliderStyles = styled.div`
  color: #fff;
padding: 15px 15px 155px 15px;
text-align: center;

.slider {
  background: rgba(0,0,0,0);
  border-radius: 5px;
  -webkit-appearance: none;
  width: 544px;
  height: 13px;
  outline: none;
  -webkit-transition: .2s;
  transition: opacity .2s;
  width: 100%;
  max-width: 444px;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  border: 2px solid #fff;
  border-radius: 5px;
  width: 11px;
  height: 25px;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  border-radius: 5px;
  width: 11px;
  height: 25px;
  cursor: pointer;
}
.checker-ctr {
  background-image: linear-gradient(45deg, #808080 25%, transparent 25%), linear-gradient(-45deg, #808080 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #808080 75%), linear-gradient(-45deg, transparent 75%, #808080 75%);
  background-size: 5px 5px;
  border-radius: 5px;
  ${'' /* background: yellow; */}
  display: flex;
  margin: 15px;
  width: 444px;
}
.slide-row {
  display: flex;
  justify-content: center;
  align-items: center;
  .slider-text-input {
    background: #222;
    border-radius: 5px;
    color: #fff;
    font-size: 18px;
    text-align: center;
    height: 25px;
    width: 44px;
  }
}
`;

class ColorSlider extends Component {
  state = {
    hueValue: 1,
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
    const { hueValue, saturationValue, lightnessValue, alphaValue } = this.state;
    return (
      <SliderStyles
        hue={hueValue}
        saturation={saturationValue}
        lightness={lightnessValue}
        alpha={alphaValue}
      >
        <Sliders
          handleInput={this.handleChange}
          hueValue={hueValue}
          saturationValue={saturationValue}
          lightnessValue={lightnessValue}
          alphaValue={alphaValue}
        />
    </SliderStyles>
    )
  }
}

export default ColorSlider
