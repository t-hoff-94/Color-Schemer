import React, { Component } from 'react'
import SliderStyles from './styles/SliderStyles'
import Sliders from './Sliders'
import SwatchBoxes from './SwatchBoxes'

class ColorSlider extends Component {
  state = {
    hueValue: 1,
    saturationValue: 100,
    lightnessValue: 50,
    alphaValue: 100,
    swatchState: 'primary',
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
        <SwatchBoxes
          color={{
            h: hueValue,
            s: saturationValue,
            l: lightnessValue,
            a: alphaValue,
          }}/>
    </SliderStyles>
    )
  }
}

export default ColorSlider
