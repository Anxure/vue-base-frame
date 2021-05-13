<template>
  <div class="breadcrumb-content">
    <collapsed></collapsed>
    <a-breadcrumb class="breadcrumb">
      <a-breadcrumb-item>User</a-breadcrumb-item>
      <a-breadcrumb-item>Bill</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import collapsed from '../collapsed/Index.vue';
export default defineComponent({
  components: { collapsed },
  setup() {
    return {};
  }
});
</script>

<style lang="less" scoped>
.breadcrumb-content {
  display: flex;
  align-items: center;
  background: #fff;

  .breadcrumb {
    line-height: 48px;
  }
}
</style>