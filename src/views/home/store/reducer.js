// import { fromJS } from 'immutable'
import {
  INPUT_CHANGE
} from './actionTypes'
const defaultStates = {
  inputVal: ''
}

export default (state = defaultStates, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        inputVal: action.value
      }

    default:
      return state;
  }
}
