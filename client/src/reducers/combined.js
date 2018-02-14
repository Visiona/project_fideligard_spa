import {combineReducers} from 'redux'
import { dates } from './dates'
import { stocks } from './stocks'


export const fideligardApp = combineReducers({
  dates,
  stocks
})
