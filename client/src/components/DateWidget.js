import React from 'react'

const DateWidget = () => (
  <div className='row'>
    <div  className="columns medium-2 large-3">12/6/4 columns</div>
    <div className="columns medium-8 large-6">
      <div className="slider" data-slider data-initial-start="50" data-end="200">
        <span className="slider-handle"  data-slider-handle role="slider" tabindex="1"></span>
        <span className="slider-fill" data-slider-fill></span>
        <input type="hidden" value='100' />
      </div>
    </div>
    <div className="columns medium-2 large-3"></div>
  </div>
)

export default DateWidget
