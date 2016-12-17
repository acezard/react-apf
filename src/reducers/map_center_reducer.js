import { MAP_CENTER } from '../actions/index'

export default function (state = {lat: 48.8566, lng: 2.3522}, action) {
  switch (action.type) {
    case MAP_CENTER:
      return action.payload
  }
  return state
}