import React, { Component } from 'react'
import DateWidget from '../components/DateWidget'
import { setCurrentDate } from '../actions'
import { connect } from 'react-redux'

class DateContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      date: this.props.date
    }
  }


  render() {
    const {dates, onInputChange} = this.props
    return (
      <div>

        <DateWidget
          onInputChange={onInputChange}
          min={dates.min}
          max={dates.max}
          chosenDayNumber={dates.chosenDayNumber}
        />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    dates: state.dates
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (e) => {
      dispatch(setCurrentDate(e))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateContainer)
