import axios  from "axios";

const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = (token:string) => {
  window.localStorage.setItem(localStorageKey, token || "");
};

export const login = async (data: { username: string; password: string }) => {
  const res = await axios.post('/api/login', {
    data
  });
  return res.data
}

export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);
