<template>
  <a-card class="img-list t-4 center">
    <img style="max-height: 367px" :src="workplaceImg" alt="少壮不努力老大徒伤悲">
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import workplaceImg from '@/assets/image/workplace.jpg'
export default defineComponent({
  setup () {
    return {
      workplaceImg
    }
  }
})
</script>
<style lang="less" scoped>
  .img-list{
    background-color: #FFF;

  }
</style>