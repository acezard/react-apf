import { FETCH_LOCATION } from '../actions/index'

export default function (state = [0, 0], action) {
  switch (action.type) {
    case FETCH_LOCATION:
      return action.payload
  }
  return state
}