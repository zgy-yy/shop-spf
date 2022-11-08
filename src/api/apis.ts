import http from "./index";
import {LoginData} from "../model";

export function login(userName: string, password: string) {
  return http.post<LoginData>('login', {username: userName, password: password})
}
