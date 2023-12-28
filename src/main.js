import Vue from 'vue'
import App from './App.vue'

import './assets/main.css'

const settings = {
  apiKey: 'AIzaSyDP00rBL5Yz8ItqQtICLeB6NgENTexF3Ro',      
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
}


new Vue({
  render: (h) => h(App)
}).$mount('#app')
