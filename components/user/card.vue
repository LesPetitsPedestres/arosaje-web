<template>
  <v-sheet id="card" class="text-[#395144]">
    <v-img
      class="rounded-2xl w-full h-full"
      cover
      src="https://cdn.shopify.com/s/files/1/0061/6389/0289/products/GrandPalmierKentiaxxlWhiteGrey_16b35afc-a014-4359-9c3a-6c302d077ec2_x1500.jpg?v=1618328288"
    ></v-img>
    <v-btn to="../plants/infos" class="w-full rounded-2xl" id="btn" variant="tonal" append-icon="mdi-arrow-right">
      Plante
    </v-btn>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      plants: [
        {
          url: '',
        },
      ],
    }
  },
}
</script>

<style>
#card {
  position: relative;
}

#btn {
  position: absolute;
  z-index: 1;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
