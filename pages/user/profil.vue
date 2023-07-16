<template>
  <div class="bg-[#DFE8CC] flex flex-row w-[100vw] h-[100vh] gap-10 items-center justify-center s">
    <div class="flex flex-col justify-center items-center gap-10">
      <div class="flex items-center gap-5">
        <v-avatar
          image="https://www.planeteradicale.org/wp-content/uploads/2019/06/photo-pour-site-de-rencontre-1024x710.jpg"
          size="80"
        ></v-avatar>
        <div class="flex flex-col items-center justify-center gap-10 text-[#395144]">
          <div class="bg-[#D9D9D9] w-60 h-10 flex justify-center items-center rounded-3xl">
            <span class="text-xl font-medium">{{ person.name }}</span>
          </div>

          <v-row justify="center">
            <v-dialog v-model="dialog" persistent width="1024">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="bg-[#D9D9D9] text-[#395144] text-xs" rounded="xl"
                  >Editer votre profil</v-btn
                >
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Modification du profil</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="person.num" label="Numéro de téléphone" required></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="person.adress" label="adresse" required></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field v-model="person.mail" label="Email" required></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field v-model="person.mdp" label="Mot de passe" required></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue-darken-1" variant="text" @click="dialog = false"> Close </v-btn>
                  <v-btn color="blue-darken-1" variant="text" @click="dialog = false"> Save </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </div>
      </div>
      <UserInfos />
    </div>
    <UserPlantsGalery />
  </div>
</template>

<script>
import UserInfos from '../../components/user/infos.vue'

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
      dialog: false,
    }
  },
}
</script>
