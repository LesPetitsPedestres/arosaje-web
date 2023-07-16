<template>
  <v-app>
    <div>
      <TemplatesNavbar />
      <v-main class="w-full h-[100vh]">
        <slot />
      </v-main>
    </div>
  </v-app>
</template>

<script>
export default {}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
