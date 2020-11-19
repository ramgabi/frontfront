import Vue from 'vue'
import Vuex from 'vuex'
// import socket from '@/src/plugins/socketio.js'
import socket from './modules/socket'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    socket,
  },
  // mutations: {
  // },
  // actions: {
  // },
})
