import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler'

export default () =>
  createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'AddressFormator',
        component: () => import('./views/AddressFormator.vue'),
      },
      {
        path: '/address_batch_creator',
        name: 'AddressBatchCreator',
        component: () => import('./views/AddressBatchCreator.vue'),
      },
      {
        path: '/address_batch_creator2',
        name: 'AddressBatchCreator2',
        component: () => import('./views/AddressBatchCreator2.vue'),
      },
    ],
  })
