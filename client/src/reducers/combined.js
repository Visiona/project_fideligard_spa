import {combineReducers} from 'redux'
import { dates } from './dates'
import { stocks } from './stocks'
import { trade } from './trade'
import { transactions } from './transactions'
import { portfolio } from './portfolio'

export const fideligardApp = combineReducers({
  dates,
  stocks,
  trade,
  transactions,
  portfolio
})
