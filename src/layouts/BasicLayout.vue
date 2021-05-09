<template>
  <div class="basicLayout">
    <div class="main">
      <!-- 活性 -->
      <router-view v-slot="{ Component }" v-if="$route.meta.keepAlive">
        <transition :name="switchAnimation">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
      
      <router-view v-slot="{ Component }" v-if="!$route.meta.keepAlive">
        <transition :name="switchAnimation">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
    <div class="tabBar da">
      <p
        v-for="(item, index) in tabList"
        :key="index"
        class="tabItem dd-vh"
        @click="switchRouter(index, item.path)"
      >
        <img :src="active==index? item.selectIcon:item.icon" />
        <span :style="active==index? 'color:#FF392D':''">{{item.name}}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "basicLayout",
  data() {
    return {
      switchAnimation: "",
      active: 0,
      tabList: [
        {
          name: "首页",
          icon: require('@/assets/images/home.png'),
          selectIcon: require('@/assets/images/home_fill.png'),
          path: "/index/home"
        },
        {
          name: "分类",
          icon: require('@/assets/images/sort.png'),
          selectIcon: require('@/assets/images/sort_fill.png'),
          path: "/index/sort"
        },
        {
          name: "购物车",
          icon: require('@/assets/images/cart.png'),
          selectIcon: require('@/assets/images/cart_fill.png'),
          path: "/index/shopCart"
        },
        {
          name: "我的",
          icon: require('@/assets/images/my.png'),
          selectIcon: require('@/assets/images/my_fill.png'),
          path: "/index/mine"
        }
      ]
    };
  },
  watch: {
    // $route: {
    //   handler(val, oldVal) {
    //     document.title = val.meta.title;
    //   }
    // }
  },
  methods: {
    switchRouter(index, path) {
      this.$router.push({ path });
      this.active = index;
    }
  }
};
</script>
<style lang="less" scope>
.basicLayout {
  height: 100%;
  .tabBar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: 0 -0.1rem 0.5rem 0.1rem #f5f5f5;
    height: 120px;
    .tabItem {
      flex: 1;
      text-align: center;
      color: #666;
      font-size: 24px;
      img {
        width: 50px;
        height: auto;
        margin-bottom: 10px;
      }
    }
  }
  .main {
    height: 100%;
    padding-bottom: 5px;
    box-sizing: border-box;
  }
}
</style>