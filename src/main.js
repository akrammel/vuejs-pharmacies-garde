import Vue from 'vue'
import App from './App.vue'
import { NavbarPlugin,TablePlugin,SpinnerPlugin,LayoutPlugin,FormGroupPlugin,FormSelectPlugin,FormCheckboxPlugin,ButtonPlugin } from 'bootstrap-vue'
Vue.use(NavbarPlugin)
Vue.use(FormCheckboxPlugin)
Vue.use(ButtonPlugin)
Vue.use(FormSelectPlugin)
Vue.use(FormGroupPlugin)
Vue.use(LayoutPlugin)
Vue.use(SpinnerPlugin)
Vue.use(TablePlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  el: '#app',
  render: h => h(App)
})