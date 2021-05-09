/**
 * 1、直接把全局数据挂载到 vue 原型上面  好处： 方便， 不好处： 非响应式的数据 
 * 2、vuex上面存储的是响应式的数据  
 * **/ 

// import { createApp } from 'vue'
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"
import states from './states'
import Getters from './getters'
import Mutations from './mutations'
import Actions from './actions'
// createApp().use(Vuex)

const store = createStore({
    state: states, // 相当于小程序中的全局变量
    getters: Getters, //计算属性
    mutations: Mutations, //改变state： commit()
    actions: Actions, // 异步改变 mutations: dispatch() 提交一个mutations
    plugins: [createPersistedState({
        storage: window.sessionStorage
    })]
})


export default store;