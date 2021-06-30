<template>
  <div class="multi-tab-box">
    <a-tabs v-model:activeKey="activeKey" type="editable-card" @edit="onEdit" hideAdd @tabClick="tabClick" :tabBarStyle="{ background: '#FFF', margin: 0, paddingLeft: '16px', paddingTop: '1px' }">
      <a-tab-pane v-for="tab in pages" :key="tab.fullPath" :tab="tab.meta.title" :closable="pages.length > 1">
      <a-dropdown :trigger="['contextmenu']"></a-dropdown>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
export default {
  setup() {
    const tabOptions = reactive({
      pages: [],
      fullListPath: [],
      activeKey: ''
    });
    const route = useRoute();
    const router = useRouter();
    createOption(route)
    onBeforeRouteUpdate((to) => {
      tabOptions.activeKey = to.fullPath;
      createOption(to)
    });
    function createOption(to) {
      if (tabOptions.fullListPath.indexOf(to.fullPath) < 0) {
        tabOptions.pages.push({ meta: to.meta, fullPath: to.fullPath });
        tabOptions.fullListPath.push(to.fullPath);
      }
    }
    function selectedLastPath() {
      tabOptions.activeKey = tabOptions.fullListPath[tabOptions.fullListPath.length - 1];
      router.push({path: tabOptions.activeKey })

      console.log(tabOptions);
    }
    onMounted(() => {
      selectedLastPath();
    });
    function onEdit(targetKey) {
      remove(targetKey);
    }
    function tabClick (targetKey) {
      router.push({path: targetKey })
    }
    function remove(targetKey) {
      tabOptions.pages = tabOptions.pages.filter((page) => page.fullPath !== targetKey);
      tabOptions.fullListPath = tabOptions.fullListPath.filter((list) => list !== targetKey);
      // 判断当前标签是否关闭，若关闭则跳转到最后一个还存在的标签页
      if (!tabOptions.fullListPath.includes(tabOptions.activeKey)) {
        selectedLastPath();
      }
    }
    return {
      onEdit,
      tabClick,
      ...toRefs(tabOptions)
    };
  }
};
</script>

<style lang="less" scoped>
.multi-tab-box {
  height: 40px;
}
</style>