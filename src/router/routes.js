
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
      { path: 'Register', component: () => import('pages/Register.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'Halaman Depan', name: 'Halaman Depan', component: () => import('pages/index.vue') },
      { path: 'Daftar Menu', name: 'Daftar Menu Makan dan Minum', component: () => import('pages/daftarmenu.vue') },
      { path: 'Pemesanan Makanan ( Cathring )', name: 'Pesanan Acara', component: () => import('pages/pemesanan.vue') },
      { path: 'Alamat Kami', name: 'Alamat Rumah Makan', component: () => import('pages/alamat.vue') },
      { path: 'Tentang', name: 'Tentang', component: () => import('pages/tentang.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
