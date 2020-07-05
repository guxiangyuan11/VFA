import Vue from 'vue'
import Components from './widgetComponent/widgetComponent'

function install() {
  Vue.component('widgetComponent', Components)
}

export  default {
  install
}