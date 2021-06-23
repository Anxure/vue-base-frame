import { computed } from 'vue'
import { useStore } from 'vuex';
export function useBackToIndex() {
  console.log(useStore())
  const store = useStore()
  console.log(store)
  const userRouter = computed(() => store.state.user.userRouter)
  return userRouter.value[0].children[0].path
}