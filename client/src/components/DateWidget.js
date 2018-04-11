import React from 'react'
import Slider from 'react-rangeslider'
import { convertCountToDate } from '../helpers'


const DateWidget = ({chosenDayNumber, min, max, onInputChange}) => (
  <div className='dates'>

    <div className="centrix">
      <div className='row dates-container'>
        <div className="slider-date columns small-4 small-pull-1">
          <span className="vintage-date">{convertCountToDate(min)}</span>
        </div>
        <div className="columns small-4 maindate-container">
          <span className="vintage-maindate">{convertCountToDate(chosenDayNumber)}</span>
        </div>
        <div className="slider-date-right columns small-4 small-push-1">
          <span className="vintage-date">{convertCountToDate(max)}</span>
        </div>
      </div>

      <Slider
          min={min}
          max={max}
          step={1}
          value={chosenDayNumber}
          format={convertCountToDate}
          onChange={onInputChange}
        />
    </div>


  </div>
)

export default DateWidget
