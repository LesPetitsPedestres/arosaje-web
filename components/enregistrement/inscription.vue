<template>
  <div class="w-[400px] h-[550px] flex flex-col justify-center items-center bg-[#F6F5F5] rounded-lg">
    <form class="w-full flex flex-col justify-center items-center">
      <h1 class="font-semibold text-3xl text-[#395144]">S'inscrire</h1>
      <div class="flex flex-col justify-center">
        <v-text-field bg-color="#DFE8CC" v-model="name" label="Nom Complet"></v-text-field>
        <v-text-field bg-color="#DFE8CC" v-model="email" label="Email"></v-text-field>
        <v-text-field bg-color="#DFE8CC" v-model="password" label="Mot de passe" type="password"></v-text-field>
        <v-text-field
          bg-color="#DFE8CC"
          v-model="passwordConfirmed"
          label="Confirmer le mot de passe"
          type="password"
        ></v-text-field>
        <div>
          <span>Vous êtes :</span>
          <div class="flex">
            <v-checkbox color="#395144" label="Propriétaire"></v-checkbox>
            <v-checkbox color="#395144" label="Gardien"></v-checkbox>
            <v-checkbox color="#395144" label="Botaniste" label-color="#395144"></v-checkbox>
          </div>
        </div>
        <v-btn to="/user/profil" class="text-white" color="#395144" @click.prevent="login">S'inscrire</v-btn>
      </div>
      <div class="flex flex-col items-center">
        <span>Vous avez déjà un compte ?</span>
        <nuxt-link to="/" class="text-[#395144]">Se connecter</nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirmed: '',
    }
  },
  methods: {
    login() {},
  },
}
</script>
