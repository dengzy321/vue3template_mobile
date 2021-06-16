<template >
  <div class="home">
    <h2>{{ msg }}</h2>

    <input type="text" placeholder="请输入" v-focus="msg" />
  </div>
</template>
<script>
import dengzybb from 'dengzybb'  // 自己发布的测试npm包
export default {
  data() {
    return {
      msg: "我是首页",
    };
  },
  computed: {},
  watch: {},
  // 指令
  directives: {
    focus: {
      mounted(el, binding) {
        el.focus();
        console.log(binding)
      },
    },
  },
  created() {
    dengzybb.sayName()
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="less">
#test {
  height: 400px;
  // cursor: pointer;
  border: 1px solid red;
}
</style>