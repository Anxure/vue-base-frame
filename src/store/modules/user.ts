import { LoginModel, MenuParams, MenuModel } from '@/api/model/userModel'
import { getStore } from '@/utils/storage'
import { getMenu }from '@/api/user'
import { Module } from 'vuex'
import { useGetAllowRoute, useLoopTranformRouter } from '@/hooks/usePermissionState'
import { asyncRoutes } from '@/router/router'
import { RouteRecordRaw } from 'vue-router'
export interface UserState {
  userInfo: LoginModel | string,
  menu: MenuModel[],
  userRouter: RouteRecordRaw[]
}
export default {
  namespaced: true,
  state: (): UserState => ({
    userInfo: getStore('userInfo')? JSON.parse(getStore('userInfo') as string) : '',
    menu: [],
    userRouter: []
  }),
  mutations: {
    SETUSERINFO(state, data: LoginModel) {
      state.userInfo = data
    },
    SET_MENU(state, data:  MenuModel[]) {
      state.menu = data
    },
    SET_USER_ROUTER(state, data) {
      state.userRouter = data
    }
  },
  getters: {

  },
  actions: {
    async getMenu({ commit }, params: MenuParams) {
      const { result, code } = await getMenu(params)
      if (code === 0) {
        console.log('%cuser.ts line:29 result', 'color: #007acc;', result);
        // 将后台菜单转换为一维数组
        const menus = useLoopTranformRouter(result)
        // 获取用户权限下的菜单
        const userMenu = useGetAllowRoute(asyncRoutes, menus)
        console.log(userMenu, 'userMenu11')
        commit('SET_MENU', result)
        commit('SET_USER_ROUTER', userMenu)
        return { result, userMenu }
      }
    }
  }
} as Module<UserState, unknown>