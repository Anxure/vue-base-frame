<template>
  <div class="collapsed-content">
    <menu-unfold-outlined v-if="collapsed" class="trigger" @click="toggleCollapsed" />
    <menu-fold-outlined v-else class="trigger" @click="toggleCollapsed" />
  </div>
</template>

<script lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },
  setup() {
    const store = useStore();
    const collapsed = ref(false);
    function toggleCollapsed() {
      collapsed.value = !collapsed.value;
      store.commit('app/TOGGLECOLLAPSED');
    }
    return {
      toggleCollapsed,
      collapsed
    };
  }
});
</script>

<style scoped lang="less">
.trigger {
  font-size: 18px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
.trigger:hover {
  color: @primary-color;
}
</style>