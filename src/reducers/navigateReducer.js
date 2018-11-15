import {
  SET_CURRENT_PATH,
  SET_PROFILE_PATH,
} from '../actions/navigateActions'

const initialState = {
  nextPath: ''
};

export function navigateReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_PATH:
      console.log(action.payload.path)
      return {...state, nextPath: action.payload.path};

    case SET_CURRENT_PATH:
      console.log(action.payload.path)
      return {...state, nextPath: action.payload.path};

    default:
      return state;
  }
}