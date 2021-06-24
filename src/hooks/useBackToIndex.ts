import { computed } from 'vue'
import { useStore } from 'vuex';
export function useBackToIndex() {
  const store = useStore()
  const userRouter = computed(() => store.state.user.userRouter)
  return userRouter.value[0].children[0].path
}