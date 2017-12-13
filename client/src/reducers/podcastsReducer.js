// import React from 'react'
import { FETCH_PODCASTS } from '../actions/index'
const INITIAL_STATE = {
  podcasts: []
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_PODCASTS:
      return { ...state, podcasts: action.payload.data }
    default: return state
  }
}