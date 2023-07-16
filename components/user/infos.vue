<template>
  <div class="flex flex-col bg-white w-[500px] h-[400px] rounded-3xl items-center gap-10">
    <div class="mt-5 bg-[#D9D9D9] rounded-3xl w-50 h-10 justify-center items-center flex text-[#395144]">
      <h1 class="text-2xl">Vos Informations</h1>
    </div>
    <div class="flex flex-col gap-10 ml-[-100px] text-[#395144]">
      <span class="text-lg">
        <v-icon>mdi-phone-in-talk</v-icon>
        {{ person.num }}</span
      >
      <span class="text-lg">
        <v-icon>mdi-crosshairs-gps</v-icon>
        {{ person.adress }}</span
      >
      <span class="text-lg">
        <v-icon>mdi-email-fast-outline</v-icon>
        {{ person.mail }}</span
      >
      <span class="text-lg">
        <v-icon>mdi-lock-outline</v-icon>
        {{ person.mdp }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: {
        name: 'James Kirkup',
        num: '09 05 48 21 56',
        mail: 'james.kirkup@gmail.com',
        mdp: '*****************',
        adress: '42 rue des pédestres, Montpellier',
      },
    }
  },
}
</script>
