import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { navigateReducer } from './navigateReducer'
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

const rootReducer = (history) => combineReducers({
  authForm: authReducer,
  currentPath: navigateReducer,
  form: formReducer,
  router: connectRouter(history),
});

export default rootReducer;
