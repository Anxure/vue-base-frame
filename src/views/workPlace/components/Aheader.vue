<template>
  <a-card>
    <div class="flex align-item-center">
      <a-avatar class="user-avatar" :size="72" :src="headerImg"></a-avatar>
      <div class="user-text">
        <h3>早安，Anxure，开始您一天的工作吧！</h3>
        <span>今日天气：多云， 温度：19℃ - 35℃</span>
      </div>
    </div>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import headerImg from '@/assets/image/avatar.png';
export default defineComponent({
  setup() {
    return {
      headerImg
    };
  }
});
</script>

<style scoped lang="less">
.user-text{
  margin-left: 20px;
  h3{
    font-weight: bold;
  }
}
</style>