import React, { Component } from 'react'
import SliderStyles from './styles/SliderStyles'
import Sliders from './Sliders'
import SwatchInfo from './SwatchInfo'
import chroma from 'chroma-js'

function getHexCode(color) {
  const hsla = {
    h: color.hueValue,
    s: color.saturationValue,
    l: color.lightnessValue,
    a: color.alphaValue,
  }
  const s = parseFloat(hsla.s) / 100;
  const l = parseFloat(hsla.l) / 100;
  const a = parseFloat(hsla.a) / 100;
  const cmykColors = chroma(hsla.h, s, l, 'hsl').cmyk()
  const hexCode = chroma(hsla.h, s, l, 'hsl').hex()
  const rgbaColors = chroma(hsla.h, s, l, a, 'hsl').rgba()
  return {
    cmykColors,
    hexCode,
    rgbaColors
  };
}

class ColorSlider extends Component {
  state = {
    hueValue: 255,
    saturationValue: 100,
    lightnessValue: 50,
    alphaValue: 100,
    modeOptions: {
      hexCode: `#fff`,
      cmykColors: [0,0,0,5],
      rgbaColors: [8,8,6,6],
    },
  }

  handleChange = (e) => {
    const option = e.target.name;
    const val = e.target.value;
    const modeOptions = getHexCode(this.state);
    this.setState(()=> ({
      [option]: val,
      modeOptions
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
        <SwatchInfo
          options={this.state.modeOptions}
          color={{
            h: hueValue,
            s: saturationValue,
            l: lightnessValue,
            a: alphaValue,
          }}/>
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
