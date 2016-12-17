import { ACTIVE_LOC } from '../actions/index'

export default function (state = null, action) {
  switch (action.type) {
    case ACTIVE_LOC:
      return action.payload
  }
  return state
}