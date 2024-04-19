import instance from "./index";

export function userLogin(params: any) {
  return instance.post("/auth/login", params);
}

export function getUserInfo() {
  return instance.get("/auth/profile");
}
