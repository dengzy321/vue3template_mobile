<template>
  <div class="blankLayout">
    <div class="header">我是空白布局（实际项目删）</div>
    <div class="main">
      <!-- 活性 -->
      <transition :name="switchAnimation">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
      </transition>

      <transition :name="switchAnimation">
        <router-view v-if="!$route.meta.keepAlive" />
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlankLayout",
  data() {
    return {
      switchAnimation: ''
    };
  }
};
</script>
<style lang="less" scope>
  .blankLayout{
    height: 100%;
    .main{
      height: 100%;
    }
  }
</style>