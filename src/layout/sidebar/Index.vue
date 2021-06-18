<template>
  <a-menu class="menu-content" :theme="theme" mode="inline" :inline-collapsed="collapsed" :selectedKeys="selectedKeys" :openKeys="openKeys">
    <template v-for="item in menu" :key="item.name">
      <template v-if="item.children && item.children.length > 0">
        <sider-item :menu-info="item" :key="item.name"></sider-item>
      </template>
      <a-menu-item v-else :key="item.name">
        <router-link :to="item.path">
          <span class="anticon">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="`#icon-${item.icon}`"></use>
            </svg>
            <i :class="['iconfont', `icon-${item.icon}`]"></i>
          </span>
          <span>{{ item.title }}</span>
        </router-link>
      </a-menu-item>
    </template>
  </a-menu>
</template>
<script lang="ts">
import { computed } from 'vue';
import { useMenuState } from '@/hooks/useMenuState'
import { useStore } from 'vuex';
import SiderItem from './SiderItem.vue';
export default {
  components: {
    SiderItem
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const store = useStore();
    const menu = computed(() => store.state.user.menu);
    const { selectedKeys, openKeys } = useMenuState(props.collapsed)
    return {
      theme: computed(() => store.state.app.theme),
      menu,
      selectedKeys,
      openKeys
    };
  }
};
</script>

<style lang="less" scoped>
.menu-item-title.active {
  width: 0;
  display: inline-block;
}
.menu-content {
  max-height: calc(100vh - 64px);
}
</style>