import axios  from "axios";
export const appId = '61a625c893e4f8d23c1b607f'
export const localStorageKey = "__auth_provider_token__";
export const localStorageKeyExpired ="__auth_provider_token__expired__"
export const getToken = () => window.localStorage.getItem(localStorageKey);
export const getTokenExpired = () => window.localStorage.getItem(localStorageKeyExpired);
export const handleUserResponse = (token:string) => {
  window.localStorage.setItem(localStorageKey, token || "");
};
export const handleUserExpired = (tokenExpired:string) => {
  window.localStorage.setItem(localStorageKeyExpired, tokenExpired || "");
};

export const login = async (data: { username: string; password: string }) => {
  const res = await axios.post('/api/login', {
    data
  });
  return res.data
}

export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);
