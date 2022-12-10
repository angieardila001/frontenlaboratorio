<template>
  <v-container>
    <v-row class="text-center">
      
      <v-col cols="6 " class="mb-12">
       <v-hover id="border">
          <template v-slot:default="{ hover }">
          <v-card  max-width="344" outlined :elevation="hover ? 24 : 6"
          class="mx-auto pa-6 rounded-lg rounded-tr-0"  color="orange" shaped to="/configuracion">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-2">LABFICAT</div>
              <v-list-item-title class="text-h5 ">
              CONFIGURACIÓN <br>
              PARAMITRIZACION
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
          class="mx-auto pa-6 rounded-lg rounded-tr-0" color="orange" shaped @click="ir()" >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-2">LABFICAT</div>
              <v-list-item-title class="text-h5 mb-7">
               COTIZACIONES
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
          class="mx-auto pa-6 rounded-lg rounded-tr-0" color="orange" shaped @click="recepcion()" >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-2">LABFICAT</div>
              <v-list-item-title class="text-h5 ">
               RECEPCIÓN <br> DE MUESTRA
              </v-list-item-title>
            </v-list-item-content>
           <v-btn icon @click="recepcion()">
            <v-icon class="black--text">mdi-newspaper-variant-multiple-outline</v-icon>
            </v-btn>
          </v-list-item>
        </v-card>
        </template>
        </v-hover>
        
      </v-col>
      <v-col cols="4">
        <v-hover>
          <template v-slot:default="{ hover }">
        <v-card max-width="344" outlined :elevation="hover ? 24 : 6"
          class="mx-auto pa-6 rounded-lg rounded-tr-0" color="orange" shaped @click="orden()">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-2">LABFICAT</div>
              <v-list-item-title class="text-h5 mb-6">
                REPORTES 
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </template>
        </v-hover>
      </v-col>

      <v-col cols="4">
        <v-hover>
          <template v-slot:default="{ hover }">
        <v-card max-width="344" outlined :elevation="hover ? 24 : 6"
          class="mx-auto pa-6 rounded-lg rounded-tr-0" color="orange" shaped @click="usuario()">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-2">LABFICAT</div>
              <v-list-item-title class="text-h5 mb-6">
                USUARIOS
              </v-list-item-title>
            </v-list-item-content>
            <v-btn icon @click="usuario()">
            <v-icon class="black--text">mdi-account-plus</v-icon>
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
    
    ir() {
      this.$router.push("/traerCotizacion");
    },
    recepcion(){
      this.$router.push("/listadoMuestra");
    },
    usuario(){
      this.$router.push("/usuarios");
    },
    orden(){
      this.$router.push("/orden");
    }
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
