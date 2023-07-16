<template>
  <div class="bg-[#DFE8CC] w-full h-full flex items-center justify-center">
    <div class="bg-white w-[90%] h-[90%] rounded-3xl pt-5 flex flex-col items-center justify-center gap-6">
      <div class="bg-[#D9D9D9] flex justify-center items-center rounded-3xl w-44 h-9 text-[#395144]">
        <h1>{{ plants[id - 1].name }}</h1>
      </div>

      <div class="w-full h-[95%] flex flex-col items-center justify-center">
        <v-img width="100%" height="300" aspect-ratio="16/9" :src="plants[id - 1].url"></v-img>
        <v-card class="w-full h-full">
          <v-tabs v-model="tab">
            <v-tab value="one">Informations générales</v-tab>
            <v-tab value="two">Conseils</v-tab>
            <v-tab value="three">Carte</v-tab>
          </v-tabs>

          <v-card-text class="overflow-auto max-h-[200px]">
            <v-window v-model="tab">
              <v-window-item value="one">
                <v-list>
                  <v-list-item prepend-icon="mdi mdi-flower"> {{ plants[id - 1].name }} </v-list-item>
                  <v-list-item prepend-icon="mdi-crosshairs-gps"> {{ plants[id - 1].adress }}</v-list-item>
                  <v-list-item prepend-icon="mdi-subtitles-outline">
                    {{ plants[id - 1].description }}
                  </v-list-item>
                </v-list>
              </v-window-item>

              <v-window-item value="two">
                  <v-list>
                    <v-list-item
                    v-if="plants[id - 1].conseils.length>0"
                    v-for="conseil in plants[id - 1].conseils"
                    :key="conseil.name"
                    >
                    <v-list-item-content>
                      <v-list-item-title class="font-bold">{{ conseil.name }}</v-list-item-title>
                      <v-list-item-text>{{ conseil.description }}</v-list-item-text>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item v-else class="font-bold">Il n'y a pas encore de conseil pour cette plante.</v-list-item>
                </v-list>
                <v-row justify="center">
              <v-dialog v-model="dialog" persistent width="1024">
                <template v-slot:activator="{ props }" >
                  <v-btn
                    color="#DFE8CC"
                    class="text-[#395144] max-w-[200px] text-xs mb-10"
                    v-bind="props"
                    
                  >
                    Ajouter un commentaire
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Ajout d'un commentaire</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field v-model="pseudo" label="Pseudo ou nom" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field v-model="commentaire" label="Commentaire" required></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false"> Close </v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false, addCommentaire()"> Save </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
            

              </v-window-item>

              <v-window-item value="three">
                <iframe
                  class="w-full"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7071.208098646584!2d3.8778249572711343!3d43.618216004438175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1682926609756!5m2!1sfr!2sfr"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentaire: '',
      pseudo: '',
      dialog: false,
      tab: null,
      id: this.$route.query.id,
      plants: [
        {
          id: '1',
          url: 'https://begreen.imgix.net/63871aebf14bc895065678.jpg?w=1200&h=1200&auto=format',
          name: 'Pachira',
          adress: '4 rue alertin, Montpellier',
          description: "Le propiétaire n'a pas mis de commentaire.",
          conseils: [],
        },
        {
          id: '2',
          url: 'https://begreen.imgix.net/607833e5931e9674590783.jpg?w=1200&h=1200&auto=format',
          name: 'Bonsaï Pyracantha',
          adress: '23 avenue des Roses, Toulouse',
          description: 'Elle a 9 ans, les feuilles tombent de temps en temps.',
          conseils: [
            {
              name: 'Julie toue',
              description: "Bien vérifier que le substrat est sec avant d'arroser ",
            },
          ],
        },
        {
          id: '3',
          url: 'https://begreen.imgix.net/63f34583ce968136892495.jpg?w=1200&h=1200&auto=format',
          name: 'Calathea Orbifolia',
          adress: '8 rue de la Liberté, Marseille',
          description: 'Elle pousse grâce aux cendres de ma femme décédée.',
          conseils: [
            {
              name: 'Hannah truff',
              description: 'arroser régulièrement',
            },
            {
              name: 'Mark flop',
              description: 'La mettre souvent au soleil.',
            },
          ],
        },

        {
          id: '4',
          url: 'https://begreen.imgix.net/63ce59264bd03618524623.jpg?w=1200&h=1200&auto=format',
          name: 'Calathea Medallion',
          adress: '12 rue de la Paix, Paris ',
          description: "Ramener d'un voyage en équateur.",
          conseils: [
            {
              name: 'Pierre touche',
              description: 'Placer la dans une pièce entre 20 et 24 degré',
            },
          ],
        },
        {
          id: '5',
          url: 'https://begreen.imgix.net/63ea1e1659b43733152047.jpg?w=1200&h=1200&auto=format',
          name: 'Citrus Kumquat',
          adress: '260 rue janne, Montpellier',
          description: 'Penser à mettre les fruits de côté',
          conseils: [
            {
              name: 'Anne Gno',
              description: 'Arroser souvent mais peu.',
            },
          ],
        },
        {
          id: '6',
          url: 'https://begreen.imgix.net/607939c3d3a57389268245.jpg?w=1200&h=1200&auto=format',
          name: 'Bonsaï Acer palmatum',
          adress: '15 place de la comédie, Montpellier',
          description: "Le propiétaire n'a pas mis de commentaire.",
          conseils: [
            {
              name: 'Valod Huri',
              description: 'Vous devriez couper certaine feuilles.',
            },
            {
              name: 'Sophie Stick',
              description: "Les feuilles ne sont pas en bon état, il faut s'en occuper.",
            },
          ],
        },

        {
          id: '7',
          url: 'https://begreen.imgix.net/60b0a9e257ded657830852.jpg?w=1200&h=1200&auto=format',
          name: 'Bonsaï Pinus halepensis',
          adress: '85 place alfonse, Montpellier',
          description: "Le propiétaire n'a pas mis de commentaire.",
          conseils: [],
        },
        {
          id: '8',
          url: 'https://begreen.imgix.net/6078474b05da9788529481.jpg?w=1200&h=1200&auto=format',
          name: 'Bananier Musa Tropicana',
          adress: '22 rue robert, Montpellier',
          description: "Elle mesure 40 cm de haut, je l'aime beaucoup",
          conseils: [],
        },
        {
          id: '9',
          url: 'https://begreen.imgix.net/63ce43b661864443009792.jpg?w=1200&h=1200&auto=format',
          name: 'Anthurium Kokedama',
          adress: '64 place du nombre, Montpellier',
          description: 'Elle apporte joie et bonheur dans mon couple.',
          conseils: [
            {
              name: 'Jean Bont',
              description: 'La plante ne doit pas être trop au soleil.',
            },
          ],
        },
      ],
    }
  },
  methods: {
    addCommentaire() {
      this.plants[this.id - 1].conseils.push({name:this.pseudo, description:this.commentaire})
    }
  },
}
</script>
