
<template>
  <div>
    <ul>
      <li>{{name}}</li>
      <li>{{state}}</li>
      <li></li>
      <li></li>
    </ul>
    <a-button @click="changeUserInfo"></a-button>
    <test-props :name="name" @changeNameFromChild="changeNameFromChild"></test-props>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from 'vue'
import TestProps from '../../components/TestProps.vue'
export default {
  components: {TestProps},
  setup () {
    const userInfo = reactive({name: 'xulian', age: 21})
    const state = ref(false)
    console.log('%cIndex.vue line:17 object', 'color: #007acc;', userInfo);
    console.log('%cIndex.vue line:17 object', 'color: #007acc;', state);
    function changeUserInfo() {
      userInfo.name = '修改后的值'
      state.value = true
    }
    function changeNameFromChild(val) {
      userInfo.name = val
    }
    return {
      changeUserInfo,
      state,
      changeNameFromChild,
      ...toRefs(userInfo)

    }
  }
}
</script>

<style lang="scss" scoped>

</style>