import { postRequest } from "./apiRequests";

interface LoginBody {
  username: string;
  password: string;
}

export const login = async (username: string, password: string) => {
  const url = "/api/login";
  const data = { username, password };
  return postRequest<string, LoginBody>(url, undefined, data);
};
