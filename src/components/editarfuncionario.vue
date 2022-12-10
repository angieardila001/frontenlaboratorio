<template>
    <div>
      <v-row justify="center">
   
        <v-col cols="5">
          <v-col
            contain
            id="borde1"
            cols="11"
            justify="center"
            class="
              my-12
              justify-center
              text-center
              white--text
              pa-4
              text-center
              s
              text-no-wrap
              rounded-xl
            "
          >
            <h3 class="black--text">Tipo Persona</h3>
            <input id="bordi" type="text" v-model="tipopersona" />
            <h3 class="black--text">Nombre</h3>
            <input id="bordi" type="text" v-model="nombre" />
            <h3 class="black--text">Documento</h3>
            <input id="bordi" type="text" v-model="documento" />
            <h3 class="black--text">Direccion</h3>
            <input id="bordi" type="text" v-model="direccion" />
            <h3 class="black--text">Rol</h3>
            <input id="bordi" type="text" v-model="rol" />
            <br />
            <input class="black--text" type="file" @change="subir" />
            <br />
            <v-btn @click="editar()">Editar</v-btn>
          </v-col>
        </v-col>
      </v-row>
    </div>
  </template>
  <script>
  import axios from "axios";
  export default {
    name: "PageEditarfuncionario",
    data() {
      return {
        height: 700,
        width: 600,
        tipoppersona: this.$store.state.funcionario.tipopersona,
        nombre: this.$store.state.funcionario.nombre,
        documento: this.$store.state.funcionario.documento,
        direccion: this.$store.state.funcionario.direccion,
        rol: this.$store.state.funcionario.rol,
       
      };
    },
  
    methods: {
      editar() {
        let header = { headers: { "x-token": this.$store.state.token } };
        axios
          .put(
            `https://laboratorioan.herokuapp.com/api/usuario/${this.$store.state.funcionario}`,
            {
                tipopersona: this.tipopersona,
                nombre: this.nombre,
                documento: this.documento,
                direccion: this.direccion,
                rol: this.rol,
            },
            header
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      },
  
      
      
    },
  };
  </script>
  <style>
  #bordi {
    background: white;
  
    justify-content: center;
    text-justify: center;
    border: solid 2px #000000 !important;
  }
  #borde1 {
    background: white;
  
    justify-content: center;
    text-justify: center;
    border: solid 2px #aa2626 !important;
  }
  </style>