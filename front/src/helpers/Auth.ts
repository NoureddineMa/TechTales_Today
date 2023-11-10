import API from "./axios"

export async function Login(data:{}){
    const res = await API.post('/auth/login',data)
    return res
}

export async function Register(data:{}){
    const res = await API.post('/auth/register',data)
    return res
}

