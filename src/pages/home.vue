<template >
    <div class="home">
        <div class="content">{{msg}} --- 挂载{{$store.state.count}}次</div>
        <router-link to="/main/goodsDetail">点击进去商品详情</router-link>
        <button @click="addCount">点击</button>

        <custom-input v-model="searchText"></custom-input>

        <h4>这是input的值：{{searchText}}</h4>
    </div>
</template>
<script>
import CustomInput from "../components/custom-input";
export default {
  components: {
    CustomInput
  },
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
    // this.bus.comName = "我是首页";
  },
  mounted() {},
  methods: {
    addCount() {
      // this.$store.dispatch("increment", 10);
    }
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