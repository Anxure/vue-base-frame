<template>
  <a-sub-menu :key="menuInfo.name" v-bind="$attrs">
  <template #title>
    <span>
      <i :class="['iconfont', `icon-${menuInfo.icon}`]"></i>
      <span>{{menuInfo.title}}</span>
    </span>
  </template>
  <template v-for="item in menuInfo.children" :key="item.name">
    <template v-if="!item.children">
      <a-menu-item :key="item.name">
        <router-link :to="item.path">
        <span>{{ item.title }}</span>
        </router-link>
      </a-menu-item>
    </template>
    <template v-else>
      <sub-menu :menu-info="item" :key="item.name" />
    </template>
  </template>
</a-sub-menu>
</template>
<script lang="ts">
export default {
  name: 'SubMenu',
  props: {
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  },
  // components: {
  //   'sub-menu':
  // },
  created() {
    // console.log('%cSiderItem.vue line:29 object', 'color: #007acc;', this)
    console.log(11111)
  },
  setup(props) {
    console.log('%cSiderItem.vue line:29 object', 'color: #007acc;', props);
  }

}
</script>