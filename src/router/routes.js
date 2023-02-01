
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/students',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/students/Index.vue') },
      { path: 'new', component: () => import('pages/students/New.vue') }
    ]
  },
  {
    path: '/teachers',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/teachers/Index.vue') }
    ]
  },
  {
    path: '/lessons',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/lessons/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
