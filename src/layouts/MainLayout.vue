<template>
  <q-layout view="lHh Lpr lFf">
    <q-header unelevated>
      <q-toolbar class="bg-brown-6">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Rumah Makan RF
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-brown-6"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-1"
        >
         MENU
        </q-item-label>
        <q-item clickable active-class="active" exact v-ripple :to="{ name: 'Halaman Depan'}">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>

           <q-item-section>
             Halaman Depan
           </q-item-section>
         </q-item>
         <q-item clickable active-class="active" exact v-ripple :to="{ name: 'Daftar Menu Makan dan Minum'}">
          <q-item-section avatar>
            <q-icon name="view_list" />
          </q-item-section>

           <q-item-section>
             Daftar Menu Makan dan Minum
           </q-item-section>
         </q-item>
         <q-item clickable active-class="active" exact v-ripple :to="{ name: 'Pesanan Acara'}">
          <q-item-section avatar>
            <q-icon name="perm_phone_msg" />
          </q-item-section>

           <q-item-section>
             Pemesanan Acara
           </q-item-section>
         </q-item>
         <q-item clickable active-class="active" exact v-ripple :to="{ name: 'Alamat Rumah Makan'}">
          <q-item-section avatar>
            <q-icon name="room" />
          </q-item-section>

           <q-item-section>
             Alamat Rumah Makan
           </q-item-section>
         </q-item>
         <q-item clickable active-class="active" exact v-ripple :to="{ name: 'Tentang'}">
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>

           <q-item-section>
             Tentang
           </q-item-section>
         </q-item>
       </q-list>
     </q-drawer>

     <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
