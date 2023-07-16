<template>
    <div class="bg-[#DFE8CC] w-full flex items-center justify-center">
      <div class="bg-white my-10 w-[90%] h-[90%] rounded-3xl pt-10 flex flex-col items-center justify-center">
        <div class="bg-[#D9D9D9] flex justify-center items-center rounded-3xl w-44 h-9 text-[#395144]">
          <h1>Liste des annonces</h1>
        </div>
        <div class="w-full h-[95%] flex flex-col items-center">
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
                  {{ plant.name }}
                </v-btn>
              </v-sheet>
            </div>
          </div>
          <v-row class="m-2" justify="center">
              <v-dialog v-model="dialog" persistent width="1024">
                <template v-slot:activator="{ props }">
                  <v-btn
                    color="#DFE8CC"
                    class="text-[#395144] max-w-[200px] text-xs"
                    append-icon="mdi-arrow-right"
                    v-bind="props"
                  >
                    Ajouter une annonce
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Ajout d'une plante</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="name" label="Nom de la plante" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field label="Famille de la plante" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-file-input label="Ajouter une photo"></v-file-input>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="Description" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="Lieux" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-select :items="['0-2', '2-5', '5-10']" label="Âge" required></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field type="date" label="Date de début" v-model="startDate"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field type="date" label="Date de fin" v-model="endDate"></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false"> Close </v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false, addAnnonce()"> Save </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </v-container>
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dialog:false,
        name: '',
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
          
        ],
      }
    },
    methods: {
      addAnnonce() {
        this.plants.push({id: '666',name: this.name, url:''})
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
  