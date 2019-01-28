import React from 'react'

const Sliders = props => {
  const { hueValue, saturationValue, lightnessValue, alphaValue, handleInput } = props;
  return (
    <div>
      <div className='slide-row'>
        <div className='checker-ctr'>
          <input
            style = {{
              backgroundImage: `linear-gradient(to right,
              hsla(0, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(20, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(30, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(40, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(50, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(60, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(70, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(80, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(90, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(100, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(110, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(120, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(130, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(140, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(150, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(160, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(170, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(180, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(190, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(200, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(210, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(220, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(230, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(240, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(250, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(260, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(270, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(280, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(290, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(300, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(310, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(320, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(330, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(340, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(350, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%),
              hsla(360, ${saturationValue}%,
                ${lightnessValue}%, ${alphaValue}%))`
        }}
            type='range'
            min='1' max='360'
            className='slider slider-hue'
            name='hueValue'
            value={hueValue}
            onChange={props.handleInput}
          />
        </div>
        <input
          name='hueValue'
          value={hueValue}
          onChange={props.handleInput}
          className='slider-text-input'
          type='text'
        />
      </div>
      <div className='slide-row'>
        <div className='checker-ctr'>
          <input
            style={{
              background: 'rgba(0,0,0,0)',
              backgroundImage: `linear-gradient(to right,
              hsla(0,0%,${lightnessValue}%, ${alphaValue}%) 0%,
              hsla(${hueValue},100%,${lightnessValue}%,${alphaValue}%) 100%)`,
            }}
            type='range'
            min='1' max='100'
            className='slider slider-saturation'
            name='saturationValue'
            value={saturationValue}
            onChange={handleInput}
          />
        </div>
        <input
          name='saturationValue'
          value={saturationValue}
          onChange={handleInput}
          className='slider-text-input'
          type='text'
        />
      </div>
      <div className='slide-row'>
        <div className='checker-ctr'>
          <input
            style = {{
              background: `linear-gradient(to right,
                hsla(0,${saturationValue}%,0%,${alphaValue}%) 0%,
                hsla(${hueValue},${saturationValue}%,50%,${alphaValue}%) 50%,
                hsla(0,${saturationValue}%,100%,${alphaValue}%) 100%)`
            }}
            type='range'
            min='1' max='100'
            className='slider slider-lightness'
            name='lightnessValue'
            value={lightnessValue}
            onChange={handleInput}
          />
        </div>
        <input
          name='lightnessValue'
          value={lightnessValue}
          onChange={handleInput}
          className='slider-text-input'
          type='text'
        />
      </div>
      <div className='slide-row'>
        <div className='checker-ctr'>
          <input
            style={{
              backgroundImage: `linear-gradient(to right,
              hsla(0,0%,${lightnessValue}%, 0%) 0%,
              hsla(${hueValue},${saturationValue}%,${lightnessValue}%,100%) 100%)`,
            }}
            type='range'
            min='1' max='100'
            className='slider slider-alpha'
            name='alphaValue'
            value={alphaValue}
            onChange={handleInput}
          />
        </div>
        <input
          name='alphaValue'
          value={alphaValue}
          onChange={handleInput}
          className='slider-text-input'
          type='text'
        />
      </div>
    </div>
  )
}

export default Sliders
