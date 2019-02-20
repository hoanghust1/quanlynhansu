import ApiService from '@/common/api.service'

const state = {
  errors: null,
  nhanvien: {},
  suanv1: {},
  xoanv1: {}
}

const getters = {
  currentNhanvien (state) {
    return state.nhanvien
  },
  suanv1 (state) {
    return state.suanv1
  },
  xoanv1 (state) {
    return state.xoanv1
  }
}

const actions = {
  'themnhanvien' (context, credentials) {
    console.log('credentials', credentials.manv)
    return new Promise(resolve => {
      ApiService.post('nhanvien', credentials)
        .then(({ data }) => {
          context.commit('SET_AUTH', data.nhanvien)
          resolve(data)
        })
        .catch(({ response }) => {
          context.commit('SET_ERROR', response.data.errors)
        })
    })
  },
  'suannv' (context, credentials) {
    console.log('credentials', credentials)
    return new Promise(resolve => {
      ApiService.post(`/nhanvien/${credentials.manv}`, credentials)
        .then(({ data }) => {
          console.log(credentials)
          context.commit('SET_NV', data.suanv1)
          resolve(data)
        })
        .catch(({ response }) => {
          context.commit('SET_ERROR', response.data.errors)
        })
    })
  },
  'xoanvv' (context, credentials) {
    console.log('credentials', credentials)
    return new Promise(resolve => {
      ApiService.post(`/nhanvien/${credentials.manv}`, credentials)
        .then(({ data }) => {
          console.log(credentials)
          context.commit('XOA_NV', data.xoanv1)
          resolve(data)
        })
        .catch(({ response }) => {
          context.commit('SET_ERROR', response.data.errors)
        })
    })
  }
}

const mutations = {
  'SET_ERROR' (state, error) {
    state.errors = error
  },
  'SET_AUTH' (state, nhanvien) {
    state.nhanvien = nhanvien
    state.errors = {}
  },
  'SET_NV' (state, suanv1) {
    state.suanv1 = suanv1
    state.errors = {}
  },
  'XOA_NV' (state, xoanv1) {
    state.xoanv1 = xoanv1
    state.errors = {}
  }}

export default { state, actions, mutations, getters }
