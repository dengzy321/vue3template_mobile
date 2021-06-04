import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/common.css'
import 'vant/lib/index.css'
import Vant from 'vant'
import "amfe-flexible"
import mitt from 'mitt'

const app = createApp(App) // 创建实例

const emitter = mitt()
app.config.globalProperties.emitter = emitter  // 创建全局事件总线

app.use(Vant)
app.use(router)
app.use(store)
app.mount('#app')
