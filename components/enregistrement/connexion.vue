<template>
  <div class="w-[400px] h-[550px] flex flex-col justify-center items-center bg-[#F6F5F5] rounded-lg">
    <form class="w-full flex flex-col justify-center items-center gap-20">
      <h1 class="font-semibold text-3xl text-[#395144]">Se connecter</h1>
      <div>
        <v-text-field bg-color="#DFE8CC" v-model="email" label="Adresse email"></v-text-field>
        <v-text-field bg-color="#DFE8CC" v-model="password" label="Mot de passe" type="password"></v-text-field>
        <v-btn to="/user/profil" class="text-white" color="#395144" @click.prevent="login">Se connecter</v-btn>
      </div>
      <div class="flex flex-col items-center">
        <span>Pas encore de compte ?</span>
        <nuxt-link to="/enregistrement/inscription" class="text-[#395144]">Créer un compte</nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {},
  },
}
</script>
