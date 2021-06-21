import { createStore } from 'vuex'
import app from './modules/app'
import user from './modules/user'
import { AppState} from './modules/app'
import { UserState} from './modules/user'
interface IsState {
  app: AppState
  user: UserState
}
export default createStore<IsState>({
  devtools: process.env.NODE_ENV !== 'production',
  // state: {},
  mutations: {},
  actions: {},
  modules: { app, user },
})
