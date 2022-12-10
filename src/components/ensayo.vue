<template>
  <v-container fluid>
    <v-row class="text-center">
      <v-col class="col-4 justify-fluid">
        <v-img style="float: right"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sena_Colombia_logo.svg/1200px-Sena_Colombia_logo.svg.png"
          height="100" max-width="100" class="justify-end"></v-img>
      </v-col>
      <v-col class="col-6 text-center">
        <h1 style="float: left">Añadir Ensayos</h1>
      </v-col>
      <v-col class="col-12"> </v-col>
      <v-col class="col-12 content-center">
        <v-col class="col-6 content-center">
          <v-alert :value="alert" transition="scale-transition" text prominent type="error" icon="mdi-cloud-alert"
            v-for="(p, i) in alerta" :key="i">
            {{ p.msg }}
          </v-alert>
          <v-alert :value="alert1" transition="scale-transition" text prominent type="error" icon="mdi-cloud-alert">
            Por favor Registrate o Inicia Sesion
            <br />
            <v-btn to="/" class="mt-6" text color="red">Ir A Iniciar Sesion</v-btn>
          </v-alert>
        </v-col>


        <v-row>
          <v-col class="col-6 black--text">
            <v-row>
              <v-col cols="6 " class="segundo px-0 py-0">
                <p class="datos mb-0 white--text">Tipo ensayo</p>
                <p class="datos mb-0 white--text">Metodo</p>
                <p class="datos mb-0 white--text">Tecnica</p>
                <p class="datos mb-0 white--text">Valor Minimo</p>
                <p class="datos mb-0 white--text">Valor Maximo</p>
                <p class="datos mb-0 white--text">Unidades</p>

              </v-col>
              <v-col cols="6" class="mx-0 my-0 px-0 py-0">

                <v-text-field class=" field mx-0 my-0 px-0 py-0" height="23" v-model="tipo_ensayo"></v-text-field>
                <v-text-field class="field mx-0 my-0 px-0 py-0 " height="23" v-model="metodo"></v-text-field>
                <v-text-field class=" field mx-0 my-0 px-0 py-0" height="23" v-model="tecnica"></v-text-field>
                <v-text-field class=" field mx-0 my-0 px-0 py-0" height="23" v-model="valorMinimo"></v-text-field>
                <v-text-field class="field mx-0 my-0 px-0 py-0" height="23" v-model="valorMaximo"></v-text-field>
                <v-text-field class="field mx-0 my-0 px-0 py-0" height="23" v-model="unidades"></v-text-field>
              </v-col>
            </v-row>
          </v-col>

          <v-col class="col-6 black--text">
            <v-row>
              <v-col cols="6 " class="segundo px-0 py-0">
                <p class="datos mb-0 white--text">Costo</p>
                <p class="datos mb-0 white--text">Limite de Cuantificacion</p>
                <p class="datos mb-0 white--text">Responsables <v-btn icon @click="dialog = true">
                    <v-icon class="black--text">mdi-account-plus</v-icon>
                  </v-btn>
                </p>
                <p class="datos mb-0 white--text">Titular </p>
                <p class="datos mb-0 white--text">Suplentes </p>
                <p class="datos mb-0 white--text">Descripcion</p>
              </v-col>
              <v-col cols="6" class="mx-0 my-0 px-0 py-0">
                <v-text-field class="field mx-0 my-0 px-0 py-0 " :rules="costoRules" height="23" v-model="costo">
                </v-text-field>
                <v-text-field class="field mx-0 my-0 px-0 py-0 " height="23" v-model="limiteCuantificacion">
                </v-text-field>
                <p class=" field mx-0 my-0 px-0 py-0" height="23">Elige la opcion </p>
                <div v-for="(p, i) in clientes" :key="i">
                  <p class=" field mx-0 my-0 px-0 py-0" height="23">{{ p.nombre }}</p>

                </div>

                <v-textarea class=" mx-0 my-0 px-0 py-0" rows="1" v-model="descripcion"></v-textarea>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <br>
        <br>
        <v-btn @click="dialog3 = true">
          GUARDAR
        </v-btn>
      </v-col>
    </v-row>
    
    <v-dialog v-model="dialog3">
      <v-card tile>
        <v-toolbar flat dark color="primary">
          <v-btn icon dark @click="dialog3 = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Editar Datos</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog3 = false">
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
                  return-object :rules="ciudadRules" v-model="titular" outlined dense filled background-color="grey lighten-2"
                  class="font-weight-bold black--text" required></v-autocomplete>


              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-autocomplete :hint="`${clientes2.nombre}`" :items="clientes2" item-text="nombre" label="Suplente"
                  return-object :rules="ciudadRules" v-model="suplente" outlined dense filled background-color="grey lighten-2"
                  class="font-weight-bold black--text" required></v-autocomplete>

              </v-col>
              <v-col cols="12" sm="6" md="4">

              </v-col>
              <v-col cols="12">
                <v-btn @click="dialog3 = true">
                  GUARDAR
                </v-btn>
              </v-col>


            </v-row>
          </v-container>



        </v-card>

        <div style="flex: 1 1 auto;"></div>
      </v-card>

    </v-dialog>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  name: "PageEnsayo",
  data() {
    return {
      dialog: false,
      dialog3: false,
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
      clientes: [],
      alert: false,
      alert1: false,
      alerta: [],
      alertas: [],
      valid: true,
      correo: "",
      correoRules: [
        (v) => !!v || "E-mail es requerido",
        (v) => /.+@.+\..+/.test(v) || "E-mail debe ser valido",
      ],

      select: null,
      checkbox: false,
      show1: false,
      password: "",
      costorules: {
        required: (value) => !!value || "Es requerido.",
        min: (v) => v.length >= 8 || "Minimo 8 characteres",
      },
      titulo: [
        { text: "Tipo persona", align: "start", sortable: false, value: "tipopersona" },
        { text: "Nombre", value: "nombre" },
        { text: "Documento", value: "documento" },
        { text: "Direccion", value: "direccion" },
        { text: "Rol", value: "funcionario" },
        { text: 'Actions', value: 'actions', sortable: false },

      ],
      search: ""
    };
  },

  methods: {
    anadir() {
      axios
        .post(
          `https://laboratorioan.herokuapp.com/api/ensayo/post`, {
          tipo_ensayo: this.tipo_ensayo,
          costo: this.costo,
          limiteCuantificacion: this.limiteCuantificacion,
          titular: this.titular,
          suplente: this.suplente,
          metodo: this.metodo,
          tecnica: this.tecnica,
          valorMinimo: this.valorMinimo,
          valorMaximo: this.valorMaximo,
          unidades: this.unidades,
          descripcion: this.descripcion
        })
        .then((res) => {

          console.log(res);



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
    clientes1(item) {
      console.log(item)
      let header = { headers: { "x-token": this.$store.state.token } };

      axios
        .get(
          `https://laboratorioan.herokuapp.com/api/usuario/id/${item._id}`,
          header
        )
        .then((res) => {
          console.log(res);

          this.clientes.push(res.data.usuarios);
          console.log("clientes", this.clientes[0].nombre)

          //agregar
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  created() {

    this.traerclientes();

  },
};
</script>
<style>
#cuadro {
  background: white;

  justify-content: center;
  text-justify: center;
  border: solid 3px rgb(239, 138, 14) !important;
  display: inline-block;
  min-width: 100px;
}
</style>