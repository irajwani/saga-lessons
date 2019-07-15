import { combineReducers } from 'redux';
import {configureStore} from './CreateStore';
import rootSaga from '../Sagas';
import { reducer as authReducer } from './Auth/Reducers';
// import { reducer as startupReducer } from './Startup/Reducers';

export default () => {
  const rootReducer = combineReducers({
    // startup: startupReducer,
    auth: authReducer
  })

  return configureStore(rootReducer, rootSaga)
}
