import { takeLatest, all } from 'redux-saga/effects'
import { AuthTypes } from '../Stores/Auth/Actions'
// import { StartupTypes } from '../Stores/Startup/Actions'
import { logIn } from './AuthSaga'
// import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    
    takeLatest(AuthTypes.LOG_IN_REQUEST, logIn), //Generally, what Saga is attached to what Action Type
    

  ])
}
