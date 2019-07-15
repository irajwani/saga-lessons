import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  logInRequest: ['email'], //what data, if any, will be sent during the request, and in general what data will be attached to this action
  logInSuccess: ['message'], 
  logInFailure: ['errorMessage']
})

export const AuthTypes = Types
export default Creators
