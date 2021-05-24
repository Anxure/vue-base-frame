import { LoginModel } from '@/api/model/userModel'
import { getStore } from '@/utils/storage'
interface UserState {
  userInfo: LoginModel | null | string,
}
export default {
  namespaced: true,
  state: (): UserState => ({
    userInfo: JSON.parse(getStore('userInfo') as string) || ''
  }),
  mutations: {
    SETUSERINFO(state: UserState, data: LoginModel) {
      state.userInfo = data
     }
  },
  getters: {

  },
  actions: {

  }
}