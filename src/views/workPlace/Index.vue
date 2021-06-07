
<template>
  <div class="workplace">
    <div class="workplace-header">
      <a-header></a-header>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AHeader from './components/Aheader.vue'
export default defineComponent({
  components: {
    AHeader
  },
  setup(props) {
    console.log(props)
    const loading = ref<boolean>(true)
    setTimeout(() => {
      loading.value = false
    }, 1000)
    return {
      loading
    }
  }
});
</script>

<style lang="less" scoped>
</style>