<template>
  <div class="h-[530px] flex flex-col items-center bg-white rounded-3xl">
    <div class="bg-[#D9D9D9] rounded-2xl flex justify-center mt-6 w-44 h-8 items-center">
      <h1 class="text-lg text-[#395144]">Vos Plantes</h1>
    </div>
    <v-container>
      <v-row class="mb-6" no-gutters>
        <div v-for="plant in plants" :key="plant">
          <v-col>
            <v-sheet id="card" class="text-[#395144] h-[200px] w-[150px]">
              <v-img class="rounded-2xl w-full h-full" cover :src="plant.url"></v-img>
              <v-btn
                :to="'../plants/infos?id=' + plant.id"
                class="w-full rounded-b-2xl"
                id="btn"
                variant="tonal"
                append-icon="mdi-arrow-right"
              >
                {{ plant.name }}
              </v-btn>
            </v-sheet>
          </v-col>
        </div>
      </v-row>

      <v-row no-gutters>
        <v-col cols="8">
          <v-sheet id="card" class="text-[#395144] h-[150px]">
            <v-img
              class="rounded-2xl w-full h-full"
              cover
              src="https://begreen.imgix.net/63ce59264bd03618524623.jpg?w=1200&h=1200&auto=format"
            ></v-img>
            <v-btn
              to="../plants/infos?id=4"
              class="w-full rounded-b-2xl"
              id="btn"
              variant="tonal"
              append-icon="mdi-arrow-right"
            >
            Calathea Medallion  
            </v-btn>
          </v-sheet>
        </v-col>

        <v-col cols="4" class="flex jusity-center items-center">
          <v-sheet class="ml-6"
            ><v-btn to="/plants/myPlants" color="#DFE8CC" class="text-[#395144]" append-icon="mdi-arrow-right">
              Voir plus
            </v-btn>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plants: [
      {
              id: '1',
              name:'Pachira',
              url: 'https://begreen.imgix.net/63871aebf14bc895065678.jpg?w=1200&h=1200&auto=format',
            },
            {
              id: '2',
              name:'Bonsaï',
              url: 'https://begreen.imgix.net/607833e5931e9674590783.jpg?w=1200&h=1200&auto=format',
            },
            {
              id: '3',
              name:'Calathea',
              url: 'https://begreen.imgix.net/63f34583ce968136892495.jpg?w=1200&h=1200&auto=format',
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
