export const FETCH_LOCATION = 'FETCH_LOCATION'
export const FORM_SUBMITTED = 'FORM_SUBMITTED'

export function fetchLocation(loc) {
  return {
    type: FETCH_LOCATION,
    payload: loc
  }
}

export function submitForm(bool) {
  return {
    type: FORM_SUBMITTED,
    payload: bool
  }
}
