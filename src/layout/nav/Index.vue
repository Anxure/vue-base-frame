<template>
  <a-layout-header class="layout-header">
    <div class="header-left">
      <slot name="logo"></slot>
    </div>
    <div class="header-right">
      <a-tooltip @click="goToApi" title="API文档">
        <icon-font type="icon-file1" class="quick" />
      </a-tooltip>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
  },
  setup() {

    function goToApi() {
      console.log('功能正在开发中');
    }
    return {
      goToApi
    };
  }
});
</script>

<style lang="less" scoped>
.layout-header {
  background: @primary-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>