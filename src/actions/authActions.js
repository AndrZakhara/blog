import axios from '../axios'
import { push } from 'connected-react-router'
import { setCurrentPath } from './navigateActions'

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';

export const LOGOUT = 'LOGOUT';



export function handleLogin(form) {
  form.preventDefault();
  const user = {
    login: form.target.name.value,
    password: form.target.password.value,
  };

  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
    });

    axios.post('/login', user)
      .then((response) => {
        console.log(response);
        localStorage.setItem('cks_token', response.data.token);
        axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
        dispatch({
          type: LOGIN_SUCCESS,
        });
        dispatch(getUser('/'));
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Authorization error'),
        });
      })
  };
}

export function handleSignUp(form) {
  form.preventDefault();
  const user = {
    login: form.target.name.value,
    password: form.target.password.value,
  };

  return (dispatch) => {
    dispatch({
      type: SIGNUP_REQUEST,
    });

    axios.post('/auth', user)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: {
            username: user.login,
          },
        });
        localStorage.setItem('cks_token', response.data.token);
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: SIGNUP_FAIL,
          error: true,
          payload: new Error('Registration error'),
        });
      });
  };
}

export function handleLogout(e) {
  e.preventDefault();
  axios.defaults.headers.common.Authorization = {};
  localStorage.removeItem('cks_token');

  return {
    type: LOGOUT,
    payload: { status: false },
  };
}

export function getUser(path) {
  return (dispatch) => {
    dispatch({
      type: GET_USER_REQUEST,
    });

    axios.get('/user')
      .then((response) => {
        console.log('get user');
        console.log(response.data.login);
        dispatch({
          type: GET_USER_SUCCESS,
          payload: {
            username: response.data,
          },
        });

      })
      .then(
        dispatch(setCurrentPath(path))
        )
      .catch((error) => {
        console.log(error);
        dispatch({
          type: GET_USER_FAIL,
          error: true,
          payload: new Error('Authorization error'),
        });
      });
  };
}