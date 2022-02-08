export const Auth = {
  isAuthenticated: false,
  login(callBack) {
    Auth.isAuthenticated = true
    callBack()
  },
  logout(callBack) {
    Auth.isAuthenticated = false
    callBack()
  },
}
