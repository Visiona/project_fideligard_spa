import React from 'react'

const SortSign = ({sortType}) => {
  const classNames = `fi-arrow-${sortType} size-18`

  return (
    <i className={classNames} data-sort-type={sortType}></i>
  )
}

export default SortSign
