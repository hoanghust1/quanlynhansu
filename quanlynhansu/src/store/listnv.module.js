import ApiService from '@/common/api.service'

const state = {
  errors: null,
  listnv: [],
  searchnv: []
}

const getters = {
  listnv (state) {
    return state.listnv
  },
  searchnv (state) {
    return state.searchnv
  }
}

const actions = {
  'listnhanvien' (context) {
    return new Promise(resolve => {
      ApiService.get('nhanvien')
        .then(({ data }) => {
          context.commit('SET_NV', data)
          resolve(data)
        })
        .catch(({ response }) => {
          context.commit('SET_ERROR', response.data.errors)
        })
    })
  },
  'timnhanvien' (context, params) {
    return new Promise(resolve => {
      ApiService.get(`/nhanvien/${params}`)
        .then(({ data }) => {
          console.log(params)
          context.commit('SEARCH_NV', data)
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
  'SET_NV' (state, listnv) {
    state.listnv = listnv
  },
  'SEARCH_NV' (state, searchnv) {
    state.searchnv = searchnv
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
