import { create } from 'apisauce'
import { API_URL } from '../Config'

const authApiClient = create({
    /**
     * Import the config from the App/Config/index.js file
     */
    baseURL: API_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 10 * 1000,
  })
  
let fulfilled = (response) => response

function logIn(email) {
    return authApiClient.post(`authenticate`, { email }).then(fulfilled)
}
  

export const authService = {
    logIn
}