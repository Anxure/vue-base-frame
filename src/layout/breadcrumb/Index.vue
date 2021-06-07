<template>
  <div class="breadcrumb-content">
    <span class="trigger" @click="handleCollapse"> <i :class="['iconfont', collapsed ? 'icon-menu-unfold3' : 'icon-menu-fold']"></i></span>
    <a-breadcrumb class="breadcrumb">
      <a-breadcrumb-item v-for="item in breadContent" :key="item.name">{{ item.meta.title }}</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch,  } from 'vue';
import { useRoute, RouteLocationMatched } from 'vue-router';
export default defineComponent({
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const route = useRoute();
    const state = reactive({
      breadContent: [] as RouteLocationMatched[]
    })
    const matched = [...route.matched]
    state.breadContent = matched.splice(1)
    function handleCollapse() {
      emit('update:collapsed', !props.collapsed);
    }
    watch(() => route.name, () => {
      const matched = [...route.matched]
      state.breadContent = matched.splice(1)
    })
    return {
      handleCollapse,
      ...toRefs(state)
    };
  }
});
</script>

<style lang="less" scoped>
.breadcrumb-content {
  display: flex;
  align-items: center;
  background: #fff;
  .trigger {
    padding: 0 8px;
    cursor: pointer;
    &:hover {
      color: @primary-color;
    }
    i {
      font-size: 20px;
    }
  }
  .breadcrumb {
    line-height: 48px;
  }
}
</style>