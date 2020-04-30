<template>
  <q-page>
    <q-parallax
      src="https://bisnisukm.com/uploads/2016/07/rumah-makan-padang-untungnya-semakin-nendang.jpg"
    >
    <div class="row">
      <q-card class="fixed-center col-md-4 col-xs-12 bg-white" flat>
        Silahkan Login

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="username"
        label="Username Anda"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Tolong Ketik Username']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Password Anda"
        lazy-rules
        :rules="[
          val => val !== null && val.length > 0 || 'Password Tidak Boleh Kosong'
        ]"
      />
      <div class="q-gutter-md">
        <q-btn label="Login" type="submit" color="primary"/>
        <q-btn label="Register" to="register" color="black"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
    </q-card>
  </div>
  </q-parallax>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
      if (this.username === 'if' && this.password === '18') {
        this.$q.notify({
          type: 'positive',
          message: 'Selamat Anda Berhasil Login'
        })
        this.$router.push('/Halaman Depan')
      } else {
        this.$q.notify({
          type: 'negative',
          message: 'Anda Gagal Login, Username/Password Anda Salah'
        })
      }
    },
    onReset () {
      this.username = null
      this.password = null
    }
  }
}
</script>
