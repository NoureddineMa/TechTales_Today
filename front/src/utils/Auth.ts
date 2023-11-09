import { API } from "./baseUrl";

export async function Login(data:{}){
  const res = API.post('/login',data)
  return res
}
export async function Register(data:{}){
    const res = API.post('/register',data)
    return res
}

