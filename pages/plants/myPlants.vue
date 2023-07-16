<template>
  <div class="bg-[#DFE8CC] w-full flex items-center justify-center">
    <div class="bg-white my-10 w-[90%] h-[90%] rounded-3xl pt-10 flex flex-col items-center justify-center">
      <div class="bg-[#D9D9D9] flex justify-center items-center rounded-3xl w-44 h-9 text-[#395144]">
        <h1>Liste de mes plantes</h1>
      </div>
      <div class="w-full h-[95%] flex items-center">
        <v-container>
          <div class="grid-cols-3 grid">
            <div v-for="plant in plants" :key="plant">
              <v-sheet id="card" class="text-[#395144] h-[154px] m-6">
                <v-img class="rounded-2xl w-full h-full" cover :src="plant.url"></v-img>
                <v-btn
                  :to="'../plants/infos?id=' + plant.id"
                  class="w-full rounded-b-2xl"
                  id="btn"
                  variant="tonal"
                  append-icon="mdi-arrow-right"
                >
                  {{plant.name}}
                </v-btn>
              </v-sheet>
            </div>
          </div>
          
        </v-container>
      </div>
    </div>
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
              name:'Bonsaï Pyracantha',
              url: 'https://begreen.imgix.net/607833e5931e9674590783.jpg?w=1200&h=1200&auto=format',
            },
            {
              id: '3',
              name:'Calathea Orbifolia',
              url: 'https://begreen.imgix.net/63f34583ce968136892495.jpg?w=1200&h=1200&auto=format',
            },
            {
              id: '4',
              name:'Calathea Medallion',
              url: 'https://begreen.imgix.net/63ce59264bd03618524623.jpg?w=1200&h=1200&auto=format',
            },
            {
              id: '5',
              name:'Citrus Kumquat',
              url: 'https://begreen.imgix.net/63ea1e1659b43733152047.jpg?w=1200&h=1200&auto=format',
            },
            {
              id: '6',
              name:'Bonsaï Acer palmatum',
              url: 'https://begreen.imgix.net/607939c3d3a57389268245.jpg?w=1200&h=1200&auto=format',
            },
            {
              id: '7',
              name:'Bonsaï Pinus halepensis',
              url: 'https://begreen.imgix.net/60b0a9e257ded657830852.jpg?w=1200&h=1200&auto=format',
            },
            {
              id: '8',
              name:'Bananier Musa Tropicana',
              url: 'https://begreen.imgix.net/6078474b05da9788529481.jpg?w=1200&h=1200&auto=format',
            },
            {
              id: '9',
              name: 'Anthurium Kokedama',
              url: 'https://begreen.imgix.net/63ce43b661864443009792.jpg?w=1200&h=1200&auto=format',
            },
        ]
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
