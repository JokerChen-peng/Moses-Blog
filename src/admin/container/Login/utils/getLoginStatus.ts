import { getToken, getTokenExpired, localStorageKey, localStorageKeyExpired } from "./authProvider";

export const getLoginStatus = () =>{
  let login =false
  let token =getToken()
  const tokenExpiredAt = getTokenExpired() as string
  const currentTime =(new Date()).getTime()
  const expireTime =(new Date(tokenExpiredAt)).getTime();
  if(token&&(currentTime<=expireTime)) {
    login = true
  }
  if(!login){
    window.localStorage.removeItem(localStorageKey)
    window.localStorage.removeItem(localStorageKeyExpired)
  }
  return login
}