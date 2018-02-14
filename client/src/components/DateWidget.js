import React from 'react'
import Slider from 'react-rangeslider'
import { convertCountToDate } from '../helpers'


const DateWidget = ({chosenDayNumber, min, max, onInputChange}) => (
  <div className='row dates'>
    <div className="columns medium-6 large-6">
    </div>

    <div className="columns medium-8 large-6 large-offset-3">
      <div className='dates-container'>
        <div className="slider-date columns small-4 small-pull-1">
          {convertCountToDate(min)}
        </div>
        <div className="columns small-4 small-push-1">
          <b>{convertCountToDate(chosenDayNumber)}</b>
        </div>
        <div className="slider-date-right columns small-4 small-push-1">
          {convertCountToDate(max)}
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
    <div className="columns medium-2 large-4">
    </div>
  </div>
)

export default DateWidget
