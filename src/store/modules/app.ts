export interface AppState {
  collapsed: boolean,
  theme: string,
  title: string
}
import { layoutSetting } from '@/config/globalSetting'
export default {
  namespaced: true,
  state: (): AppState => ({
    collapsed: false,
    theme: layoutSetting.theme,
    title:layoutSetting.title
  }),
  mutations: {
    TOGGLECOLLAPSED(state: AppState) {
      state.collapsed = !state.collapsed
     }
  },
  getters: {

  },
  actions: {

  }
}