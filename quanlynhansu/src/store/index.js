import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth.module'
import listnv from './listnv.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    listnv
  }
})
