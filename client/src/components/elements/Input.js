import React from 'react'
// import PropTypes from 'react-redux'

const Input = ({ onChange, className, props}) => {
  const classNames = `form-control ${className}`

  return (
    <input className={classNames} onChange={onChange} {...props} />
  )
}

Input.defaultProps = {
  type: 'text'
}

export default Input
