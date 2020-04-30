<template>
  <q-page>
    <q-parallax
      src="https://bisnisukm.com/uploads/2016/07/rumah-makan-padang-untungnya-semakin-nendang.jpg"
    >
    <div class="row">
      <q-card class="fixed-center col-md-4 col-xs-12 bg-white" flat>
        Silahkan Registerasi

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="Username"
        label="Username Anda *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Silahkan Isi Username anda']"
      />

      <q-input
        filled
        v-model="NamaLengkap"
        label="Nama Lengkap Anda *"
        lazy-rules
        :rules="[val => val !== null && val.length > 0 || 'Silahkan Isi Nama Lengkap Anda']"
      />

      <q-input
        filled
        v-model="Email"
        label="E-Mail Anda *"
        lazy-rules
        :rules="[val => val !== null && val.length > 0 || 'Silahkan Masukan E-Mail Anda']"
      />

      <q-input
        filled
        type="Password"
        v-model="Password"
        label="Password Anda*"
        lazy-rules
        :rules="[
          val => val !== null && val.length > 0 || 'Password Anda Tidak Boleh Kosong']"
      />
      <div class="q-gutter-md">
        <q-btn label="Register"  type="submit" color="primary"/>
        <q-btn label="Login" to="/" color="black"/>
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
      Username: null,
      NamaLengkap: null,
      Email: null,
      Password: null
    }
  },
  methods: {
    onSubmit () {
    },
    onReset () {
      this.Username = null
      this.NamaLengkap = null
      this.Email = null
      this.Password = null
    }
  }
}
</script>
