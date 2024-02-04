import "./assets/main.css"

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import VueFullPage from 'vue-fullpage.js'

createApp(App)
  .use(store)
  .use(VueFullPage)
  .mount('#app')