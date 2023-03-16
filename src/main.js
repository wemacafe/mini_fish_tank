import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/all.scss'

import AOS from 'aos'
import 'aos/dist/aos.css'

import {
    Form, Field, ErrorMessage, defineRule, configure
  } from 'vee-validate'
  import AllRules from '@vee-validate/rules'
  import { localize, setLocale } from '@vee-validate/i18n'
  import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

  Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule])
  })
  
  configure({
    generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
    validateOnInput: true // 當輸入任何內容直接進行驗證
  })

  // 設定預設語系
setLocale('zh_TW')

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@fortawesome/fontawesome-free/css/all.css';

library.add(faUser);

import App from './App.vue'
import router from './router'
AOS.init()

const app = createApp(App)
app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')
