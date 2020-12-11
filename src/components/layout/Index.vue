<template>
  <a-layout class="layout-content">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible class="layout-sider">
      <div class="logo">{{collapsed? 'frame' : 'vue-base-frame'}}</div>
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
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
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { UserOutlined, VideoCameraOutlined, UploadOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },
  setup() {
    const data = reactive({
      selectedKeys: ['1'],
      collapsed: false
    });
    const refData = toRefs(data);
    return {
      ...refData
    };
  }
});
</script>
<style lang="less" scoped>
.layout-content {
  .layout-sider {
    height: 100vh;
  }
}
.layout-content .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.layout-content .trigger:hover {
  color: #1890ff;
}

.layout-content .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  font-size: 20xp;
  color: #fff;
  font-weight: bold;
  text-align: center;
  line-height: 32px;
}
</style>
