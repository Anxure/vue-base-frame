<template>
  <div>
    <ul>
      <li></li>
    </ul>
    <button @click='changeName'>22222</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  setup(props, ctx) {
    function changeName() {
      ctx.emit('changeNameFromChild', '1')
    }
    // const userInfo = toRef(props, 'name')
    console.log('%cTestProps.vue line:13 props', 'color: #007acc;', props);
    return  {
      changeName
    }
  }
})
</script>

<style lang="scss" scoped>

</style>