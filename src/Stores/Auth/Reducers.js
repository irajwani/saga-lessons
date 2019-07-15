import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { AuthTypes } from './Actions'

export const logInRequest = (state) => ({
  ...state,
  isLoading: true
})

export const logInSuccess = (state, { message }) => ({
  ...state,
  message: message,
  success: true,
  isLoading: false
})

export const logInFailure = (state, { errorMessage }) => ({
  ...state,
  message: errorMessage,
  isLoading: false
})


export const reducer = createReducer(INITIAL_STATE, {
  [AuthTypes.LOG_IN_REQUEST]: logInRequest,
  [AuthTypes.LOG_IN_SUCCESS]: logInSuccess,
  [AuthTypes.LOG_IN_FAILURE]: logInFailure,

})
