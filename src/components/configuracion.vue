<template>
  <v-container>
    <v-row class="text-center">
      
      <v-col cols="6 " class="mb-12">
       <v-hover id="border">
          <template v-slot:default="{ hover }">
          <v-card  max-width="344" outlined :elevation="hover ? 24 : 6"
          class="mx-auto pa-6 "  color="orange" shaped @click="setup()">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-2">LABFICAT</div>
              <v-list-item-title class="text-h5 mb-1">
              SETUP
              </v-list-item-title>
            
            </v-list-item-content>
            <v-btn icon>
            <v-icon class="black--text">mdi-cogs</v-icon>
            </v-btn>
          </v-list-item>
          
        </v-card>
        </template>
        </v-hover>
      
      </v-col>
      <v-col cols="4" class="mb-12">
        <v-hover>
          <template v-slot:default="{ hover }">
          <v-card  max-width="344" outlined :elevation="hover ? 24 : 6"
          class="mx-auto pa-6 rounded-lg rounded-tr-0" color="orange" shaped @click="ensayo()" >
          <v-list-item three-line to="/listarensayo">
            <v-list-item-content>
              <div class="text-overline mb-2">LABFICAT</div>
              <v-list-item-title class="text-h5 mb-8">
               ENSAYOS
              </v-list-item-title>
            </v-list-item-content>
           <v-btn  icon >
            <v-icon class="black--text">mdi-newspaper-variant-multiple-outline</v-icon>
            </v-btn>
          </v-list-item>
        </v-card>
        </template>
        </v-hover>
        
      </v-col>
      <v-col cols="12" class="">

      </v-col>
      <v-col cols="4" class="mb-12">
        <v-hover>
          <template v-slot:default="{ hover }">
          <v-card  max-width="344" outlined :elevation="hover ? 24 : 6"
          class="mx-auto pa-6 rounded-lg rounded-tr-0" color="orange" shaped @click="ir()" >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-2">LABFICAT</div>
              <v-list-item-title class="text-h5 mb-8">
               BITACORA
              </v-list-item-title>
            </v-list-item-content>
           <v-btn icon @click="ir()">
            <v-icon class="black--text">mdi-newspaper-variant-multiple-outline</v-icon>
            </v-btn>
          </v-list-item>
        </v-card>
        </template>
        </v-hover>
        
      </v-col>
       <v-col cols="4" class="mb-12">
        <v-hover>
          <template v-slot:default="{ hover }">
          <v-card  max-width="344" outlined :elevation="hover ? 24 : 6"
          class="mx-auto pa-6 rounded-lg rounded-tr-0" color="orange" shaped @click="ir()" >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-2">LABFICAT</div>
              <v-list-item-title class="text-h5 mb-8">
               CALIDAD
              </v-list-item-title>
            </v-list-item-content>
           <v-btn icon @click="ir()">
            <v-icon class="black--text">mdi-newspaper-variant-multiple-outline</v-icon>
            </v-btn>
          </v-list-item>
        </v-card>
        </template>
        </v-hover>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
  methods: {
    
    setup() {
      
      this.$router.push("/setup");
    },
    ya() {
      
      this.$router.push("/cotizacion");
    },
    ensayo() {
      this.$router.push("/listarensayo");
    },
  },
};
</script>
<style>

#border{
  border: solid 4px black;
}
#borde{
  
  border: solid 3px rgb(239, 138, 14)  !important;
}
</style>
<style>
  
</style>