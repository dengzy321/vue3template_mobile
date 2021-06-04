<template >
    <div class="home">
        <div class="content">{{msg}} --- 挂载{{$store.state.count}}次</div>
        <router-link to="/main/canvas">点击进去商品详情</router-link>
        <button @click="addCount">点击</button>


        <button @click="onClick">点击2222</button>
    </div>
</template>
<script>

import { reactive, ref } from 'vue'

const price = ref(1)

export default {
  data() {
    return {
        searchText: '32323',
        selectModel: "",
        msg: "我是首页"
    };
  },
  computed: {},
  watch: {
    selectModel(val) {
      console.log(val);
    }
  },
  created() {
    
  },
  mounted() {},
  methods: {
    addCount() {
      this.$store.dispatch("increment", 10);
    },
  }
};
</script>
<style lang="less">
.submitTab {
  background-color: #ccc;
  border-radius: 20px;
  line-height: 40px;
  position: fixed;
  bottom: 6rem;
  left: 0;
  right: 0;
  span {
    display: inline-block;
    flex: 1;
    text-align: center;
  }
}
</style>