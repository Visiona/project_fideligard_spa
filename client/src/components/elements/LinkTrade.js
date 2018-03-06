import React from 'react'
import {Link} from 'react-router-dom'

const LinkTrade = ({children, pathname, price, symbol, date}) => {
  return (
  <Link to={`/trade/${symbol}`}>
    {children}
  </Link>
  )
}

export default LinkTrade
