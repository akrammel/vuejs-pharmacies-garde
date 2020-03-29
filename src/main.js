import Vue from 'vue'
import App from './App.vue'
import { TablePlugin } from 'bootstrap-vue'
import { SpinnerPlugin } from 'bootstrap-vue'
import { LayoutPlugin } from 'bootstrap-vue'
import { FormGroupPlugin } from 'bootstrap-vue'
import { FormSelectPlugin } from 'bootstrap-vue'
import { FormCheckboxPlugin } from 'bootstrap-vue'
import { ButtonPlugin } from 'bootstrap-vue'
import { NavbarPlugin } from 'bootstrap-vue'
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