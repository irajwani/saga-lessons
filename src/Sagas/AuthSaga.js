import { put, call } from 'redux-saga/effects'
import AuthActions from '../Stores/Auth/Actions'
import { authService } from '../Services/AuthService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */

export function* logIn({email}) {
//   console.tron.log(email, password, push_notification_id)
  try {
    console.log('Auth Saga logIn triggered');
    const authResponse = yield call(authService.logIn, email)
    console.log(authResponse);

    if (authResponse.status === 200) {
      // console.tron.log(authResponse.data)
      yield put(AuthActions.logInSuccess(authResponse.data.credential)) //we need provider pair info to be logged into state

    } 
    
    else {
      // console.tron.log('failed login')
      yield put(
        AuthActions.logInFailure({
          errorMessage: 'Was not able to login with provided credentials.',
        })
      )
    }

  } catch (e) {
    // console.tron.log('failed login two')
    yield put(
      AuthActions.logInFailure({
        errorMessage:
          'We could not connect to the server. That is weird. Make sure you are connected to the internet.',
      })
    )
  }
}
