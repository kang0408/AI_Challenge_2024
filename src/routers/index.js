import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '',
    component: () => import('@layouts/default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        meta: {
          title: 'Trang chủ'
        },
        component: () => import('@pages/index.vue'),
        children: [
          {
            path: '/pages/:page',
            name: 'page',
            component: () => import('@components/Video.vue')
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
