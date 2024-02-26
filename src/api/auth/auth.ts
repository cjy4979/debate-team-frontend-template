import api from '../utils/axiosApi'
import { IAuth } from './interface'

export async function Signup(req: IAuth.AuthSignUpRequest) {
  return await api.post('/auth/signup', req)
}

export async function Login(req: IAuth.AuthSignInRequest) {
  return await api.post<IAuth.AuthSignInResponse>('/auth/login')
}

export async function Logout() {
  return await api.get('/auth/logout')
}
