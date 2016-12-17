import { FILTER_CAT } from '../actions/index'

export default function (state = 'all', action) {
  switch (action.type) {
    case FILTER_CAT:
      return action.payload
  }
  return state
}