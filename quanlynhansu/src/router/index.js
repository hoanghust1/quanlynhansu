import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/themnhanvien',
      name: 'themnhanvien',
      component: () => import('@/views/themnv')
    },
    {
      path: '/danhsachnv',
      name: 'danhsachnv',
      component: () => import('@/views/danhsachnv')
    },
    {
      path: '/suanhanvien/:manv',
      name: 'suanvv',
      component: () => import('@/views/suanv')
    },
    {
      path: '/xoanhanvien/:manv',
      name: 'xoanvv',
      component: () => import('@/views/xoanv')
    }
  ]
})
