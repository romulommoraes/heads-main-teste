
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/pontocomercial', component: () => import('pages/pontocomercial.vue') },
      { path: '/cadastro', component: () => import('pages/cadastro.vue') },
      { path: '/heads', component: () => import('pages/heads.vue') },
      { path: '/produtos', component: () => import('pages/produtos.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
