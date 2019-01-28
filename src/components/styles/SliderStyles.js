import styled from 'styled-components'

const SliderStyles = styled.div`
color: #fff;
padding: 155px 15px 155px 15px;
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
  background: rgba(0,0,0,0);
  border: 2px solid #000;
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
  background: #999;
  background-image: linear-gradient(45deg, #808080 25%, transparent 25%), linear-gradient(-45deg, #808080 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #808080 75%), linear-gradient(-45deg, transparent 75%, #808080 75%);
  background-size: 5px 5px;
  border-radius: 5px;
  display: flex;
  margin: 15px 15px 15px 0;
  width: 444px;
  input {
    border: 1px solid #999;
    margin: 0;
  }
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

export default SliderStyles
