<template>
  <div id="app">
    <!-- 保持组件活性 -->
    <router-view v-slot="{ Component }" v-if="$route.meta.keepAlive">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <!-- 不保持活性 -->
    <router-view v-else/>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
#app {
  height: 100%;
  font-size: 30px;
}
</style>
