import { useRoute } from 'vue-router'
import { computed } from 'vue'
export function useMenuState(collapsed?: boolean) {
  const route = useRoute()
  const selectedKeys = computed(() => route.name ? [route.name] : [])
  const matchedKeys = computed(() => route.matched.map((item) => item.name))
  const openKeys = !collapsed ? matchedKeys : []
  return {
    selectedKeys,
    openKeys
  }
}