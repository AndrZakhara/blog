import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  LOGOUT,
} from '../actions/authActions';

const initialState = {
  userName: 'Unknown User',
  isFetching: false,
  isAuth: false,
  user: {},
  error: '',
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return { ...state, isFetching: true, error: '' };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userName: action.payload.username,
        isAuth: true,
      };

    case SIGNUP_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    case LOGIN_REQUEST:
      return { ...state, isFetching: true, error: '' };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,

      };

    case LOGIN_FAIL:
      return { ...state,
        isFetching: false,
        error: action.payload.message,
        isAuth: false,
      };

    case GET_USER_REQUEST:
      return { ...state, isFetching: true, error: '' };

    case GET_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userName: action.payload.username,
        isAuth: true,
      };

    case GET_USER_FAIL:
      return { ...state,
        isFetching: false,
        error: action.payload.message,
        isAuth: false,
      };


    case LOGOUT:
      return { ...state, isAuth: action.payload.status };

    default:
      return state;
  }
}
