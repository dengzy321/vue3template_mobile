<template>
  <div id="app">
    <!-- <router-view/> -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
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
