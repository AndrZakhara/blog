export const SET_CURRENT_PATH = 'SET_CURRENT_PATH';
export const SET_PROFILE_PATH = 'SET_PROFILE_PATH';

export function setCurrentPath(path) {
  console.log('set path: ');
  console.log(path);
  return {
    type: SET_CURRENT_PATH,
    payload: { path }
  }
}

export function setProfilePath() {
  return {
    type: SET_PROFILE_PATH,
    payload: {
      path: '/profile'
    }
  }
}
