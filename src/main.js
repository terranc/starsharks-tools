const { createApp } = require('vue')
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import createRouter from './router'

const app = createApp(App)
app.use(createRouter())
app.use(ElementPlus)
app.mount('#app')
