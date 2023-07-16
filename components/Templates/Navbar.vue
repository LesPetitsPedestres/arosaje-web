<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <nuxt-link to="/user/profil">
        <v-list-item
          prepend-avatar="https://www.planeteradicale.org/wp-content/uploads/2019/06/photo-pour-site-de-rencontre-1024x710.jpg"
          :title="name"
          :subtitle="mail"
        >
        </v-list-item>
      </nuxt-link>
    </v-list>

    <v-divider class="border-opacity-100"></v-divider>

    <v-list density="compact" nav v-for="(item, index) in items" :key="index">
      <v-list-item :prepend-icon="item.icon" :title="item.title" value="" :to="item.route"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      name: 'James Kirkup',
      mail: 'james.kirkup@gmail.com',
      items: [
        { title: 'Home', icon: 'mdi-home-outline', route: '/' },
        { title: 'Mes plantes', icon: 'mdi-flower-tulip-outline', route: '/plants/myPlants' },
        { title: 'Annonces', icon: 'mdi-archive-eye-outline', route: '/annonces/annonces' },
      ],
    }
  },
}
</script>
