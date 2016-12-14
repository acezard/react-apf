import { FORM_SUBMITTED } from '../actions/index'

export default function (state = false, action) {
  switch (action.type) {
    case FORM_SUBMITTED:
      return action.payload
  }
  return state
}
