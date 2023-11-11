import { API } from "./baseUrl";

export async function Login(data:{}){
  const res = API.post('/auth/login',data)
  return res
}
export async function Register(data:{}){
    const res = API.post('/auth/register',data)
    return res
}

