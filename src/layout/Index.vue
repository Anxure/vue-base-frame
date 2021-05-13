<template>
  <a-layout class="layout-content">
     <nav-component>
       <template #logo>
         <layout-logo></layout-logo>
       </template>
     </nav-component>
    <a-layout>
    <side-component></side-component>
      <a-layout-content>
        <layout-breadcrumb></layout-breadcrumb>
        <div class="app-main" :style="{ margin: '16px', padding: '24px', background: '#fff', minHeight: '280px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import NavComponent from '@/layout/nav/Index.vue'
import SideComponent from '@/layout/sidebar/Index.vue'
import LayoutLogo from '@/layout/logo/Index.vue'
import LayoutBreadcrumb from '@/layout/breadcrumb/Index.vue'
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  components: {
    NavComponent,
    SideComponent,
    LayoutLogo,
    LayoutBreadcrumb
  },
  setup() {
    const data = reactive({
      selectedKeys: ['1']
    });
    const refData = toRefs(data);
    return {
      ...refData
    };
  }
});
</script>
<style lang="less" scoped>
@import '../assets/style/layout.less';
</style>
