import {
  INPUT_CHANGE
} from './actionTypes'

const inputChange = (value) => {
  return {
    type: INPUT_CHANGE,
    value
  }
}

export default {
  inputChange
}
