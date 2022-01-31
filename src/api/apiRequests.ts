import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const client = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    // Authorization: "Bearer " + getApiToken(),
    Authorization: "Bearer " + "abc",
    "Access-Control-Allow-Origin": "*",
  },
});

client.defaults.headers.common["Authorization"] = "Bearer " + "abc common";

export function onRequestSuccess<T>(response: AxiosResponse<T>) {
  return response.data;
}

export function onRequestError<T>(error: AxiosError<T>) {
  // TODO redirect to main page as well
  if (error.response && error.response.status === 401) {
    // jsCookie.remove("token");
    // TODO remove token
  }

  return Promise.reject(error.response || error.message);
}

export async function getRequest<T>(
  url: string,
  token?: string,
  config?: AxiosRequestConfig
): Promise<T> {
  return client
    .get<T, AxiosResponse<T>>(url, {
      ...config,
    })
    .then(onRequestSuccess)
    .catch(onRequestError);
}

export async function postRequest<T, D>(
  url: string,
  token?: string,
  data?: D | undefined,
  config?: AxiosRequestConfig | undefined,
  customOnRequestSuccess?: (res: AxiosResponse<T>) => any
): Promise<T> {
  return client
    .post<T, AxiosResponse<T>>(url, data, {
      ...config,
      method: "POST",
    })
    .then(customOnRequestSuccess ?? onRequestSuccess)
    .catch(onRequestError);
}

export async function putRequest<T, D>(
  url: string,
  token?: string,
  data?: D | undefined,
  config?: AxiosRequestConfig | undefined
): Promise<T> {
  return client
    .put<T, AxiosResponse<T>>(url, data, config)
    .then(onRequestSuccess)
    .catch(onRequestError);
}

export async function deleteRequest<T>(
  url: string,
  token?: string,
  config?: AxiosRequestConfig | undefined
): Promise<T> {
  return client
    .delete<T, AxiosResponse<T>>(url, {
      ...config,
    })
    .then(onRequestSuccess)
    .catch(onRequestError);
}

export async function patchRequest<T, D>(
  url: string,
  token?: string,
  data?: D | undefined,
  config?: AxiosRequestConfig | undefined
): Promise<T> {
  return client
    .patch<T, AxiosResponse<T>>(url, data, config)
    .then(onRequestSuccess)
    .catch(onRequestError);
}
