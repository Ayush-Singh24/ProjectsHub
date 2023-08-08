import { ApiRoutes } from "@/utils/constants";

const BACKEND_URL: string = process.env.BACKEND_URL || "http://localhost:8000";

const makePostRequest = async (
  url: string,
  data: object,
  signal?: AbortSignal
) => {
  const response = await fetch(BACKEND_URL + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
    signal: signal,
  });

  const json = await response.json();

  return {
    status: response.status,
    ...json,
  };
};

const makeGetRequest = async (url: string, signal?: AbortSignal) => {
  const response = await fetch(BACKEND_URL + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    signal: signal,
  });

  const json = await response.json();

  return {
    status: response.status,
    ...json,
  };
};

export class Service {
  static async signup(data: object, signal?: AbortSignal) {
    return await makePostRequest(ApiRoutes.UserSignUp, data, signal);
  }
  static async login(data: object, signal?: AbortSignal) {
    return await makePostRequest(ApiRoutes.UserLogin, data, signal);
  }
  static async logout(data: object, signal?: AbortSignal) {
    return await makeGetRequest(ApiRoutes.UserLogout, signal);
  }
}
