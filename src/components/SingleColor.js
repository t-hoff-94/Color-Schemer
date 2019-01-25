import React, { Component } from 'react';
import chroma from 'chroma-js'
import SingleColorStyles from './styles/SingleColorStyles'
import { getRgba, getCompColor } from './helpers/colorHelpers'

let darkenButtons = [];
let brightenButtons = [];
let brightVal = 2;
let darkVal = 3;
for(let i = 0; i < 6; i++) {
  brightenButtons.push({
    index: i,
    tintVal: brightVal,
  });
  brightVal = brightVal - 0.4;
}
for(let i = 0; i < 6; i++) {
  darkenButtons.push({
    index: i,
    tintVal: darkVal - 2,
  });
  darkVal = darkVal + 0.4;
}

class SingleColor extends Component {
  state = {
    color: 'green',
    stageColor: 'green',
    complementaryColor: 'purple',
    chromaVal: null,
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const val = this.state.stageColor.replace(/\s/g, '');
    const validColor = chroma.valid(val);
    if(validColor) {
      const chromaVal = chroma(val)._rgb.map(v => v);
      const color = chroma(getRgba(chromaVal));
      const comp = getCompColor(chromaVal);
      this.setState(()=>({color, chromaVal: chromaVal, complementaryColor: comp }));
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    const val = e.target.value;
    this.setState(()=> ({stageColor: val}));
  }

  render() {
    return (
      <SingleColorStyles
        color={this.state.color} compColor={this.state.complementaryColor}
      >
        <h1>Color</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='color'
            value={this.state.stageColor}
            onChange={this.handleChange}/>
          <button type='submit'>Submit</button>
        </form>
        <p>rgba({this.state.chromaVal && this.state.chromaVal.map((v,index) => (
          this.state.chromaVal.length - 1 === index ? v : `${v},`
        ))})</p>
        <div className='primary color-box'>
          <div>
            {brightenButtons.map((button) => <button
              key={button.index}
              style={{backgroundColor:`${chroma(this.state.color).brighten(button.tintVal)}`}}>
            </button>)}
            {darkenButtons.map((button) => <button
              key={button.index}
              style={{backgroundColor:`${chroma(this.state.color).darken(button.tintVal)}`}}>
            </button>)}
          </div>
        </div>
        {/* <p>Complementarty Color</p> */}
        <div className='complementary color-box'>
          <div>
            {brightenButtons.map((button) => <button
              key={button.index}
              style={{backgroundColor:`${chroma(this.state.complementaryColor).brighten(button.tintVal)}`}}>
            </button>)}
            {darkenButtons.map((button) => <button
              key={button.index}
              style={{backgroundColor:`${chroma(this.state.complementaryColor).darken(button.tintVal)}`}}>
            </button>)}
          </div>
        </div>
      </SingleColorStyles>
    );
  }
}

export default SingleColor;
