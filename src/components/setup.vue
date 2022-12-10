<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="col-4 justify-fluid">
        <v-img
          style="float: right"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sena_Colombia_logo.svg/1200px-Sena_Colombia_logo.svg.png"
          height="100"
          max-width="100"
          class="justify-end"
        ></v-img>
      </v-col>
      <v-col class="col-6 text-center">
        <h1 style="float: left">SETUP</h1>
        
        
      </v-col>
      <v-col class="col-12"> </v-col>
      <v-col class="col-12 content-center">
        <v-col class="col-6 content-center">

        
          <v-alert
            :value="alert"
            transition="scale-transition"
            text
            prominent
            type="error"
            icon="mdi-cloud-alert"
            v-for="(p, i) in alerta"
            :key="i"
          >
            {{ p.msg }}
          </v-alert>
           <v-alert
              :value="alert1"
              transition="scale-transition"
              text
              prominent
              type="error"
              icon="mdi-cloud-alert"
            >
              Por favor Registrate o Inicia Sesion
              <br>
              <v-btn to="/" class="mt-6" text color="red"
                >Ir A Iniciar Sesion</v-btn
              >
            </v-alert>
            </v-col>
        <v-col class="col-8">
            <v-row>            
          <v-col class="col-8">
            <h3>Consecutivo Muestra  </h3>
          </v-col>
          <v-col class="col-4">
            <input id="borde" type="text" v-model="consecutivoMuestra">
           
          </v-col>
          </v-row>
        </v-col>
        <v-col class="col-8">
          <v-row>            
          <v-col class="col-8">
            <h3>Consecutivo Oferta</h3>
          </v-col>
          <v-col class="col-4">
            <input id="borde" type="text"  v-model="consecutivoOferta">
          </v-col>
          </v-row>
        </v-col>
        <v-col class="col-8"> <v-row>            
          <v-col class="col-8">
            <h3>Consecutivo Resultados</h3>
          </v-col>
          <v-col class="col-4">
            <input id="borde" type="text" v-model="consecutivoResultados">
          </v-col>
          </v-row> </v-col>
        <v-col class="col-8"> <v-row>            
          <v-col class="col-8">
            <h3>Iva</h3>
          </v-col>
          <v-col class="col-4">
            <input id="borde" type="text" v-model="iva">
          </v-col>
          </v-row> </v-col>
           
          <v-btn  @click="editar()"> <v-icon>mdi-border-color</v-icon> </v-btn>
          
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  name: "PageSetUp",
  data() {
    return {
        sheet: false,
      alert: false,
      alert1: false,
      alerta: [],
      alertas: [],
      consecutivos:[],
      token: this.$store.state.token,
      consecutivoMuestra:this.$store.state.setup[0].consecutivoMuestra,
      consecutivoOferta:this.$store.state.setup[0].consecutivoOferta,
      consecutivoResultados:this.$store.state.setup[0].consecutivoResultados,
      iva:this.$store.state.setup[0].iva
    };
  },
  methods: {
    traerconsecutivo() {
     
      axios
        .get("https://laboratorioan.herokuapp.com/api/setup")
        .then((res) => {
          console.log(res);
          
          this.$store.commit("setSetUp",res.data.consecutivos[0]);
       
          console.log("set",this.$store.state.setup);
         
        })
        .catch((err) => {
          
            console.log(err);
        });
    },
     editar() {
      let header = { headers: { 'x-token': this.$store.state.token } };
     
      axios
        .put(
          `https://laboratorioan.herokuapp.com/api/setup/modificar/${this.$store.state.setup._id}`,{
            consecutivoMuestra:this.consecutivoMuestra,
            consecutivoOferta:this.consecutivoOferta,
            consecutivoResultados:this.consecutivoResultados,
            iva:this.iva
          },
          header
        )
        .then((res) => {
          console.log(res);
          
        })
        .catch((err) => {
           if (err.response.data.msg === "No hay token en la peticion") {
            this.alert1 = true;
          } else {
            this.alert = true;
            console.log(err);

            this.alertas = err.response.data;
            this.alerta = err.response.data.errors;
            console.log(err.response.data.errors[0].msg);
          }
        });
    },
    
  },
  created() {
    this.traerconsecutivo();
  }
};
</script>
<style>
h1 {
  font-size: 4.5rem;
}
#borde{
    border: solid 2px #0c0b0b !important;
    width: 80%;
}
</style>