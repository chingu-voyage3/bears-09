import { FETCH_PODCASTS } from '../actions/index'

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_PODCASTS:
      // console.log( JSON.stringify( {...state} ) );
      console.log( {...state, podcasts: action.payload.data } );
      return { ...state, podcasts: action.payload.data }
    default: return state
  }
}