
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/login', name:'Login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/login.vue') }
    ]
  },
  {
    path: '/register',name:'Register',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/register.vue') }
    ]
  },
  {
    path: '/students',name:'students',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',name: 'StudentsIndex', component: () => import('pages/students/Index.vue') },
      { path: 'new',name: 'StudentsNew' , component: () => import('pages/students/New.vue') },
      { path: '/:nationalCode',name: 'StudentIndex', component: () => import('pages/students/StudentIndex.vue') },
      { path: '/edit/:nationalCode',name: 'studentEdit', component: () => import('pages/students/edit.vue') }
    ]
  },
  {
    path: '/teachers',name:'teachers',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',name:'TeachersIndex', component: () => import('pages/teachers/Index.vue') },
      { path: 'new',name:'TeachersNew', component: () => import('pages/teachers/New.vue') },
      { path: '/:nationalCode',name: 'teacherEdit', component: () => import('pages/teachers/edit.vue') }
    ]
  },
  {
    path: '/lessons',name:'lessons',
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
