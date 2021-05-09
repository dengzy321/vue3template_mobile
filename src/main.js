import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/common.css'
import 'vant/lib/index.css'
import Vant from 'vant'
import "amfe-flexible"

const app = createApp(App) // 创建实例

app.use(Vant)

app.use(router)
app.use(store)

app.mount('#app')
