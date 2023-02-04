
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/students',name:'Students',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',name: 'StudentsIndex', component: () => import('pages/students/Index.vue') },
      { path: 'new',name: 'StudentsNew' , component: () => import('pages/students/New.vue') }
    ]
  },
  {
    path: '/teachers',name:'Teachers',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',name:'TeachersIndex', component: () => import('pages/teachers/Index.vue') },
      { path: 'new',name:'TeachersNew', component: () => import('pages/teachers/New.vue') }
    ]
  },
  {
    path: '/lessons',name:'Lessons',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',name:'LessonsIndex', component: () => import('pages/lessons/Index.vue') }
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
