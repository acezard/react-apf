import { MAP_CENTER } from '../actions/index'

export default function (state = null, action) {
  switch (action.type) {
    case MAP_CENTER:
      return action.payload
  }
  return state
}