<template>
  <v-container>
    <v-row class="text-center">

      <v-col cols="6 " class="mb-12">
        <v-hover id="border">
          <template v-slot:default="{ hover }">
            <v-card max-width="344" outlined :elevation="hover ? 24 : 6" class="mx-auto pa-6 " color="orange"
              @click="dialog = true">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-2">LABFICAT</div>
                  <v-list-item-title class="text-h5 mb-1">
                    LISTAR ENSAYOS
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
            <v-card max-width="344" outlined :elevation="hover ? 24 : 6" class="mx-auto pa-6 rounded-lg rounded-tr-0"
              color="orange" shaped @click="dialog3 = true">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-2">LABFICAT</div>
                  <v-list-item-title class="text-h5 mb-8">
                    NUEVO ENSAYO
                  </v-list-item-title>
                </v-list-item-content>
                <v-btn icon @click="dialog3 = true">
                  <v-icon class="black--text">mdi-newspaper-variant-multiple-outline</v-icon>
                </v-btn>
              </v-list-item>
            </v-card>
          </template>
        </v-hover>

      </v-col>

      <v-dialog v-model="dialog">
        <v-card tile>
          <v-toolbar flat dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Ensayos</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="dialog = false">
                Save
              </v-btn>
            </v-toolbar-items>

          </v-toolbar>
          <v-card>

            <v-card-title>
             Ensayos

              <v-spacer></v-spacer>
              <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" single-line hide-details>
              </v-text-field>
            </v-card-title>
            <v-data-table :headers="titulo" :items="ensayo" :search="search">
              <template v-slot:[`item.actions`]="{ item }">
              
                <v-icon v-if="item.estado==0" small class="mr-2" color="green" @click="activar(item)">
                  mdi-check
                </v-icon>
                <v-icon v-else small class="mr-2" color="red" @click="desactivar(item)">
                  mdi-cancel
                </v-icon>
              </template>
              <template v-slot:[`item.estado`]="{ item }">
              
              <span v-if="item.estado==0" small class="mr-2 red--text"  @click="activar(item)">
                Inactivo
              </span>
              <span v-else small class="mr-2 green--text"  @click="desactivar(item)">
                Activo
              </span>
            </template>
            </v-data-table>

          </v-card>

          <div style="flex: 1 1 auto;"></div>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog3">
      <v-card tile>
        <v-toolbar flat dark color="primary">
          <v-btn icon dark @click="dialog3 = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Editar Datos</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="anadir()">
              Save
            </v-btn>
          </v-toolbar-items>

        </v-toolbar>
        <v-card>
          <v-container>
            <v-row>



              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Ensayo" v-model="tipo_ensayo" outlined dense></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Metodo" v-model="metodo" outlined dense></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Tecnica" v-model="tecnica" outlined dense></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Valor Minimo" v-model="valorMinimo" outlined dense></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Valor Maximo" v-model="valorMaximo" outlined dense></v-text-field>
              </v-col>



              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Unidades" v-model="unidades" outlined dense></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Costo" v-model="costo" outlined dense></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Limite de Cuantificacion" v-model="limiteCuantificacion" outlined dense></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-textarea rows="1" label="Descripcion" v-model="descripcion" outlined dense></v-textarea>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-autocomplete :hint="`${clientes2.nombre}`" :items="clientes2" item-text="nombre" label="Titular"
                  return-object  v-model="titular" outlined dense filled background-color="grey lighten-2"
                  class="font-weight-bold black--text" required></v-autocomplete>


              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-autocomplete :hint="`${clientes2.nombre}`" :items="clientes2" item-text="nombre" label="Suplente"
                  return-object  v-model="suplente" outlined dense filled background-color="grey lighten-2"
                  class="font-weight-bold black--text" required></v-autocomplete>

              </v-col>
              <v-col cols="12" sm="6" md="4">

              </v-col>
              <v-col cols="12">
                <v-btn @click="anadir()">
                  GUARDAR
                </v-btn>
              </v-col>


            </v-row>
          </v-container>



        </v-card>

        <div style="flex: 1 1 auto;"></div>
      </v-card>

    </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios"
export default {
  name: "ListarEnsayos",

  data() {
    return {
      dialog3: false,
      dialog: false,
      costo: "",
      limiteCuantificacion: "",
      tipo_ensayo: "",
      metodo: "",
      tecnica: "",
      valorMinimo: "",
      valorMaximo: "",
      unidades: "",
      descripcion: "",
      titular:"",
      suplente:"",
      clientes2: [],
      ensayo: [],
      search: "",
      alerta: [],
      titulo: [
        { text: "Tipo ensayo", align: "start", sortable: false, value: "tipo_ensayo" },
        { text: "Metodo", value: "metodo" , sortable: false},
        { text: "Costo", value: "costo" , sortable: false},
        { text: "Valor Minimo", value: "valorMinimo", sortable: false },
        { text: "Valor Maximo", value: "valorMaximo" , sortable: false},
        { text: "Tecnica", value: "tecnica" , sortable: false},
        { text: 'Activar', value: 'actions', sortable: false },
        { text: 'Estado', value: 'estado', sortable: false },
      ],

      suplenterules: {
        required: (value) => !!value || "El ensayo es requerido.",
        max: (v) => v.length >= 25 || "Minimo 25 characteres",
      },
      titularrules: {
        required: (value) => !!value || "El ensayo es requerido.",
        max: (v) => v.length >= 25 || "Minimo 25 characteres",
      },
      descripcionrules: {
        required: (value) => !!value || "El ensayo es requerido.",
        max: (v) => v.length >= 25 || "Minimo 25 characteres",
      },
      unidadesrules: {
        required: (value) => !!value || "El ensayo es requerido.",
        max: (v) => v.length >= 25 || "Minimo 25 characteres",
      },
      valormaximorules: {
        required: (value) => !!value || "El ensayo es requerido.",
        max: (v) => v.length >= 25 || "Minimo 25 characteres",
      },
      valorminimorules: {
        required: (value) => !!value || "El ensayo es requerido.",
        max: (v) => v.length >= 25 || "Minimo 25 characteres",
      },
      tecnicarules: {
        required: (value) => !!value || "El ensayo es requerido.",
        max: (v) => v.length >= 25 || "Minimo 25 characteres",
      },
      costorules: {
        required: (value) => !!value || "El costo es requerido.",
        max: (v) => v.length >= 25 || "Minimo 25 characteres",
      },
      tipo_ensayorules: {
        required: (value) => !!value || "El ensayo es requerido.",
        max: (v) => v.length >= 25 || "Minimo 25 characteres",
      },
      limiteCuantificacionrules: {
        required: (value) => !!value || "El limite cuantificacion es requerido.",
        
      },
      metodorules: {
        required: (value) => !!value || "El ensayo es requerido.",
        max: (v) => v.length >= 25 || "Minimo 25 characteres",
      },
    }
  },
  methods: {
    traerensayos() {
      axios
        .get(
          `https://laboratorioan.herokuapp.com/api/ensayo`)
        .then((res) => {

          console.log(res);
          this.ensayo = res.data.ensayos;


          //agregar
        })
        .catch((err) => {
          console.log(err);
        });

    },
    activar(item){
        console.log(item)
        let header = { headers: { "x-token": this.$store.state.token } };
      console.log("re",header);
        axios
          .put(
            `https://laboratorioan.herokuapp.com/api/ensayo/activo/${item._id}`,{},
            header
          )
          .then((res) => {
            console.log( res);
            this.traerensayos()
  
          })
          .catch((err) => {
            console.log(err);
          });
    },
    desactivar(item){
        console.log(item)
        let header = { headers: { "x-token": this.$store.state.token } };
        
        axios
          .put(
            `https://laboratorioan.herokuapp.com/api/ensayo/inactivo/${item._id}`,{},
            header
          )
          .then((res) => {
            console.log( res);
           this.traerensayos()
  
            //agregar
          })
          .catch((err) => {
            console.log(err);
          });
    },
   traerclientes() {

      let header = { headers: { "x-token": this.$store.state.token } };
      let cliente = "Funcionario";
      axios
        .get(
          `https://laboratorioan.herokuapp.com/api/usuario/rol/${cliente}`,
          header
        )
        .then((res) => {

          console.log("clasificar", res);

          this.clientes2 = res.data.usuarios;

          console.log("ver", this.clientes2)

          //agregar
        })
        .catch((err) => {
          console.log(err);
        });

    },
    anadir() {
      axios
        .post(
          `https://laboratorioan.herokuapp.com/api/ensayo/post`, {
          tipo_ensayo: this.tipo_ensayo,
          costo: this.costo,
          limiteCuantificacion: this.limiteCuantificacion,
          responsables:{
          titular: this.titular._id,
          suplente: this.suplente._id},
          metodo: this.metodo,
          tecnica: this.tecnica,
          valorMinimo: this.valorMinimo,
          valorMaximo: this.valorMaximo,
          unidades: this.unidades,
          descripcion: this.descripcion
        })
        .then((res) => {

          console.log(res);
          this.dialog3 = false
this.$swal({
            icon: "success",
            title: "Registro de ensayo correcto",
          });
          this.traerensayos();
          //agregar
        })
        .catch((err) => {
          
          if (err.response.data.msg === "No hay token en la peticion") {
            
            this.$swal({
              icon: "error",
              title: "Por favor inicie sesion",
            });
          } else {
            this.alert = true;
            console.log(err);

            
            this.alerta = err.response.data.errors;
            console.log("alertas",this.alerta)
            console.log(err.response.data.errors[0].msg);
          }
        });
    },
  },
  created() {

    this.traerensayos();
    this.traerclientes();

  },
};
</script>
<style>
#border {
  border: solid 4px black;
}

#borde {

  border: solid 3px rgb(239, 138, 14) !important;
}
</style>