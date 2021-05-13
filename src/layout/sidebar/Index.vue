<template>
  <a-layout-sider :theme="theme" v-model:collapsed="collapsed" :trigger="null" collapsible class="layout-sider">
    <a-menu :theme="theme" mode="inline" v-model:selectedKeys="selectedKeys">
      <a-menu-item key="1">
        <user-outlined />
        <span>我的看板</span>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <span>我的视频</span>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <span>资源下载</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons-vue';
export default {
  components: {
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined
  },
  setup() {
    const store = useStore();
    const collapsed = computed(() => {
      return store.state.app.collapsed;
    });
    const theme = computed(() => {
       return store.state.app.theme;
    })
    return {
      collapsed,
      theme,
      selectedKeys: ref<string[]>(['1'])
    };
  }
};
</script>

<style lang="less" scoped>
</style>