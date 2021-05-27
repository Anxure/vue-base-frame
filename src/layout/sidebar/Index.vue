<template>
  <a-layout-sider :theme="theme" v-model:collapsed="collapsed" :trigger="null" collapsible class="layout-sider">
    <a-menu :theme="theme" mode="inline" v-model:selectedKeys="selectedKeys">
      <template v-for="item in menu" :key="item.name">
      <template v-if="item.children && item.children.length > 0">
        <sider-item :menu-info="item"></sider-item>
      </template>
      <a-menu-item v-else >
        <router-link :to="item.path">
        <i :class="['iconfont', `icon-${item.icon}`]"></i>
        <span>{{item.title}}</span>
      </router-link>
      </a-menu-item>
    </template>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import SiderItem  from './SiderItem.vue';
export default {
  components: {
    SiderItem
  },
  setup() {
    const store = useStore();
    return {
      collapsed: computed(() =>store.state.app.collapsed),
      theme:computed(() =>store.state.app.theme),
      menu: computed(() =>store.state.user.menu),
      selectedKeys: ref<string[]>(['1'])
    };
  }
};
</script>

<style lang="less" scoped>
</style>