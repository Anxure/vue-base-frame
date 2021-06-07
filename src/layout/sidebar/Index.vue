<template>
    <a-menu class="menu-content" :theme="theme" mode="inline" :inline-collapsed="collapsed" v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys">
      <template v-for="item in menu" :key="item.name">
        <template v-if="item.children && item.children.length > 0">
          <sider-item :menu-info="item" :key="item.name"></sider-item>
        </template>
        <a-menu-item v-else :key="item.name">
          <router-link :to="item.path">
            <span class="anticon">
            <i :class="['iconfont', `icon-${item.icon}`]"></i>
            </span>
            <span>{{ item.title }}</span>
          </router-link>
        </a-menu-item>
      </template>
    </a-menu>
</template>
.ant-menu-inline-collapsed>.ant-menu-item .anticon+span
<script lang="ts">
import { computed, reactive, toRefs, watch } from 'vue';
import { useStore } from 'vuex';
import { RouteRecordName, useRoute } from 'vue-router';
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
    const state = reactive({
      openKeys: ['']  as RouteRecordName [],
      selectedKeys: [''] as RouteRecordName[]
    });
    const store = useStore();
    const route = useRoute();
    const menu = computed(() => store.state.user.menu);
    const matchedKeys = route.matched.map((item) => item.name);
    state.selectedKeys = route.name ? [route.name] : [];
    state.openKeys = !props.collapsed ? matchedKeys  as RouteRecordName [] : [];
    watch(() => props.collapsed, (value, newValue) => {
      const matchedKeys = route.matched.map((item) => item.name);
      if(newValue) {
        state.openKeys = matchedKeys  as RouteRecordName []
      } else {
        state.openKeys = []
      }
    });
    return {
      ...toRefs(state),
      theme: computed(() => store.state.app.theme),
      menu
    };
  }
};
</script>

<style lang="less" scoped>
.menu-item-title.active {
  width: 0;
  display: inline-block;
}
.menu-content{
  // overflow-x: hidden;
  // overflow-y: scroll;
  max-height: calc(100vh - 64px);
  // width: calc(100% + 17px);
}
</style>