import { LoginModel, MenuParams, MenuModel } from '@/api/model/userModel'
import { getStore, setStore } from '@/utils/storage'
import { getMenu }from '@/api/user'
import { Module } from 'vuex'
interface UserState {
  userInfo: LoginModel | null | string,
  menu: MenuModel[]
}
export default {
  namespaced: true,
  state: (): UserState => ({
    userInfo: getStore('userInfo')? JSON.parse(getStore('userInfo') as string) : '',
    menu: getStore('userMenu') ? JSON.parse(getStore('userMenu') as string): []
  }),
  mutations: {
    SETUSERINFO(state, data: LoginModel) {
      state.userInfo = data
    },
    SET_MENU(state, data:  MenuModel[]) {
      state.menu = data
    }
  },
  getters: {

  },
  actions: {
    async getMenu({ commit }, params: MenuParams) {
      const { result, code } = await getMenu(params)
      if (code === 0) {
        console.log('%cuser.ts line:29 result', 'color: #007acc;', result);
        setStore('userMenu', result)
        commit('SET_MENU', result)
      }
    }
  }
} as Module<UserState, unknown>