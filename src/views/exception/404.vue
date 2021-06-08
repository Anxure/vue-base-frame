<template>
  <div class="error-content flex align-item-center flex-center column">
    <div class="error-icon">
      <svg class="icon" aria-hidden="true" style="font-size: 200px">
        <use xlink:href="#icon-404"></use>
      </svg>
    </div>
    <div class="title">抱歉，页面消失了</div>
    <a-button class="t-3" type="primary" :loading="loading" @click="goToHome">返回首页</a-button>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    function goToHome() {
      router.push('/workplace')
    }
    return {
      goToHome
    };
  }
};
</script>

<style lang="less" scoped>
.error-content{
  width: 100%;
  height: 100%;
  background-color:#FFF;
  .title {
      text-align: center;
      font-size: 16px;
      font-weight: 600;
    }
}
</style>