<template>
  <v-container fluid fill-height>

    <v-row align="center" justify="center">
      <v-col cols="12" sm="6" md="4" mb="18">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card max-width="344" outlined :elevation="hover ? 24 : 6" class="mx-auto pa-6 rounded-lg rounded-tr-0"
              color="orange" shaped to=/registro>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-2">LABFICAT</div>
                  <v-list-item-title class="text-h5 mb-1">
                    REGISTRO USUARIO
                  </v-list-item-title>

                </v-list-item-content>
                <v-btn icon>
                  <v-icon class="black--text" to=/registro>mdi-cogs </v-icon>
                </v-btn>
              </v-list-item>

            </v-card>
          </template>
        </v-hover>

      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card max-width="344" outlined :elevation="hover ? 24 : 6" class="mx-auto pa-6 rounded-lg rounded-tr-0"
              color="orange" shaped @click="dialog = true">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-2">LABFICAT</div>
                  <v-list-item-title class="text-h5 mb-1">
                    CLIENTES
                  </v-list-item-title>

                </v-list-item-content>
                <v-btn icon>
                  <v-icon class="black--text" @click="dialog = true">mdi-cogs </v-icon>
                </v-btn>
              </v-list-item>

            </v-card>
          </template>
        </v-hover>

      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card max-width="344" outlined :elevation="hover ? 24 : 6" class="mx-auto pa-6 rounded-lg rounded-tr-0"
              color="orange" shaped @click="dialog2 = true">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-2">LABFICAT</div>
                  <v-list-item-title class="text-h5 mb-1">
                    FUNCIONARIOS
                  </v-list-item-title>

                </v-list-item-content>
                <v-btn icon>
                  <v-icon class="black--text" @click="dialog2 = true">mdi-cogs </v-icon>
                </v-btn>
              </v-list-item>

            </v-card>
          </template>
        </v-hover>

      </v-col>

    </v-row>
    <v-dialog v-model="dialog">
      <v-card tile>
        <v-toolbar flat dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Clientes</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">
              Save
            </v-btn>
          </v-toolbar-items>

        </v-toolbar>
        <v-card>

          <v-card-title>
            Clientes 
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
            </v-text-field>
          </v-card-title>
          <v-data-table :headers="titulo" :items="clientes2" :search="search">
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon v-if="item.estado == 0" small class="mr-2" color="green" @click="activar(item)">
                mdi-check
              </v-icon>
              <v-icon v-else small class="mr-2" color="red" @click="inactivar(item)">
                mdi-cancel
              </v-icon>
            </template>
            <template v-slot:[`item.estado`]="{ item }">

              <span v-if="item.estado == 0" small class="mr-2 red--text">
                Inactivo
              </span>
              <span v-else small class="mr-2 green--text">
                Activo
              </span>
            </template>
            <template v-slot:[`item.actions2`]="{ item }">
              <v-icon class="mr-2" @click="modificar(item)">
                mdi-pencil
              </v-icon>
            </template>


          </v-data-table>

        </v-card>

        <div style="flex: 1 1 auto;"></div>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog2">
      <v-card tile>
        <v-toolbar flat dark color="primary">
          <v-btn icon dark @click="dialog2 = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>

          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="savee()">
              Save
            </v-btn>
          </v-toolbar-items>

        </v-toolbar>
        <v-card>
          <h1></h1>
          <v-card-title>
            FUNCIONARIOS

            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
            </v-text-field>
          </v-card-title>
          <v-data-table :headers="titulo2" :items="funcionarios2" :search="search">
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon v-if="item.estado == 0" class="mr-2" color="green" @click="activar(item)">
                mdi-account-outline
              </v-icon>
              <v-icon v-else class="mr-2" color="red" @click="inactivar(item)">
                mdi-account-off
              </v-icon>
            </template>
            <template v-slot:[`item.estado`]="{ item }">

              <span v-if="item.estado == 0" class="mr-2 red--text">
                Inactivo
              </span>
              <span v-else class="mr-2 green--text">
                Activo
              </span>
            </template>
            <template v-slot:[`item.actions2`]="{ item }">
              <v-icon class="mr-2" @click="modificar(item)">
                mdi-pencil
              </v-icon>
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
            <v-btn dark text @click="savee()">
              Save
            </v-btn>
          </v-toolbar-items>

        </v-toolbar>

        <v-card>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-autocomplete :items="items1" outlined dense filled v-model="rol" label="Tipo Persona"
                  background-color="grey lighten-2" class="font-weight-bold black--text" required></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-autocomplete :items="items2" outlined dense filled label="Rol" background-color="grey lighten-2"
                  class="font-weight-bold black--text" required></v-autocomplete>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Nombres" v-model="nombre" outlined dense></v-text-field>
                <h1></h1>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Documento" v-model="documento" outlined dense></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Dirección" v-model="direccion" outlined dense></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-autocomplete v-for="(p, i) in depa" :key="i" v-model="departamento" :items="p" label="Departamento"
                  :rules="departamentoRules" outlined dense filled background-color="grey lighten-2"
                  class="font-weight-bold black--text" required></v-autocomplete>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-autocomplete @click="traerciudad()" v-model="ciudad" :hint="`${ciu.Ciudad}`" :items="ciu"
                  item-text="Ciudad" label="Ciudad" return-object :rules="ciudadRules" outlined dense filled
                  background-color="grey lighten-2" class="font-weight-bold black--text" required></v-autocomplete>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Celular" v-model="celular" outlined dense></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Nombre Contacto" v-model="contacto" outlined dense></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Celular Contacto" v-model="telefonoCo" outlined dense></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <div style="flex: 1 1 auto;"></div>
      </v-card>
    </v-dialog>
  </v-container>

</template>
    items
<script>
import axios from "axios";
export default {
  name: "PageCotizacion",
  data() {
    return {
      id: "",
      items1: ["Natural", "juridica"],
      items2: ["Funcionario", "Cliente"],
      items3: ["Especialista", "Recepcionista", "Técnico"],
      funcionarios: [{ tipopersona: "-", nombre: "-", documento: "-", direccion: "-", ciudad: { Ciudad: "-", departamento: "-" }, contacto: "-", telefonoCo: "-", celular: "-", email: "-", rol: "-", },],
      depa: [],
      valid: true,
      ciu: "",
      tipopersona: "",
      rol: "",

      rolRules: [
        (v) => !!v || "Rol es requerido",
        (v) =>
          (v && v.length <= 40) || "El rol tiene que ser maximo 40 caracteres",
      ],
      funcionario: "",
      funcionarioRules: [
        (v) => !!v || "Funcionario es requerido",
        (v) =>
          (v && v.length <= 40) ||
          "El Funcionario tiene que ser maximo 40 caracteres",
      ],
      nombre: "",
      nombreRules: [
        (v) => !!v || "Nombre es requerido",
        (v) =>
          (v && v.length <= 25) ||
          "El nombre tiene que ser maximo 25 caracteres",
      ],
      ciudad: "",
      ciudadRules: [(v) => !!v || "Ciudad es requerida"],
      telefonoCo: "",
      telefonoRules: [(v) => !!v || "telefono es requerido"],
      contacto: "",
      contactoRules: [(v) => !!v || "Contacto es requerido"],
      celular: "",
      celularRules: [(v) => !!v || "Celular es requerido"],
      documento: "",
      documentoRules: [(v) => !!v || "Documento es requerido"],
      direccion: "",
      direccionRules: [(v) => !!v || "Dirección es requerida"],
      departamento: "",
      departamentoRules: [(v) => !!v || "Departamento es requerido"],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail es requerido",
        (v) => /.+@.+\..+/.test(v) || "E-mail debe ser valido",
      ],
      clientes2: [],
      funcionarios2: [],
      dialog: false,
      dialog2: false,
      dialog3: false,
      search: "",
      titulo: [
        {
          text: "Tipo persona",
          align: "start",
          sortable: false,
          value: "tipopersona",
        },
        { text: "Nombre", value: "nombre", sortable: false },
        { text: "Documento", value: "documento", sortable: false },
        { text: "Direccion", value: "direccion", sortable: false },
        { text: "Rol", value: "rol", sortable: false },
        { text: "Activar", value: "actions", sortable: false },
        { text: "Estado", value: "estado", sortable: false },
        { text: "Editar", value: "actions2", sortable: false },
      ],
      titulo2: [
        {
          text: "Tipo persona",
          align: "start",
          sortable: false,
          value: "tipopersona",
        },
        { text: "Nombre", value: "nombre", sortable: false },
        { text: "Documento", value: "documento", sortable: false },
        { text: "Direccion", value: "direccion", sortable: false },
        { text: "Rol", value: "funcionario", sortable: false },
        { text: "Activar", value: "actions", sortable: false },
        { text: "Estado", value: "estado", sortable: false },
        { text: "Editar", value: "actions2", sortable: false },
      ],
    };
  },
  methods: {
    editar(item) {
      this.dialog2 = false;
      this.dialog3 = true;

      console.log(item);
    },
    traerclientes() {
      let header = { headers: { "x-token": this.$store.state.token } };
      console.log("token", header);
      let cliente = "cliente";
      axios
        .get(
          `https://laboratorioan.herokuapp.com/api/usuario/rol/${cliente}`,
          header
        )
        .then((res) => {
          console.log("clasificar", res);
          this.clientes2 = res.data.usuarios;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    traerfuncionarios() {
      let header = { headers: { "x-token": this.$store.state.token } };
      let funcionario = "Funcionario";
      axios
        .get(
          `https://laboratorioan.herokuapp.com/api/usuario/rol/${funcionario}`,
          header
        )
        .then((res) => {
          this.funcionarios2 = res.data.usuarios;

          console.log(res);
          //agregar
        })
        .catch((err) => {
          console.log(err);
        });
    },
    activar(item) {
      let header = { headers: { "x-token": this.$store.state.token } };

      axios
        .put(
          `https://laboratorioan.herokuapp.com/api/usuario/activo/${item._id}`,
          {},
          header
        )
        .then((res) => {
          console.log(res);
          this.traerclientes();
          this.traerfuncionarios();

          //agregar
        })
        .catch((err) => {
          console.log(err);
        });
    },
    modificar(item) {
      let header = { headers: { "x-token": this.$store.state.token } };

      axios
        .get(
          `https://laboratorioan.herokuapp.com/api/usuario/id/${item._id}`, header
        )
        .then((res) => {
          console.log(res);

          this.id = res.data.usuarios._id
          console.log("er", this.id);
          this.funcionarios = [];
          this.funcionarios.push(res.data.usuarios);
          this.dialog2 = false;
          this.dialog3 = true;
          this.nombre = res.data.usuarios.nombre;
          this.documento = res.data.usuarios.documento;
          this.celular = res.data.usuarios.celular;
          this.direccion = res.data.usuarios.direccion;
          this.contacto = res.data.usuarios.contacto;
          this.telefonoCo = res.data.usuarios.telefonoCo;
          this.email = res.data.usuarios.email;
          this.rol = res.data.usuarios.rol
        })
        .catch((err) => {
          console.log(err);
        });
    },
    savee() {
      
      let header = { headers: { "x-token": this.$store.state.token } };
      axios
        .put(
          `https://laboratorioan.herokuapp.com/api/usuario/modificar/${this.id}`,
          {
            nombre: this.nombre,
            documento: this.documento,
            direccion: this.direccion,
            ciudad: this.ciudad,
            celular: this.celular,
            telefonoCo: this.telefonoCo,
            contacto: this.contacto,

          },
          header
        )
        .then((res) => {
          console.log("nobre", this.nombre);
          console.log(res);
          this.dialog3 = false
          this.traerfuncionarios();

          //agregar
        })
        .catch((err) => {
          console.log(err);
        });

    },

    inactivar(item) {
      let header = { headers: { "x-token": this.$store.state.token } };
      axios
        .put(
          `https://laboratorioan.herokuapp.com/api/usuario/inactivo/${item._id}`,
          {},
          header
        )
        .then((res) => {
          console.log(res);
          this.traerclientes();
          this.traerfuncionarios();

          //agregar
        })
        .catch((err) => {
          console.log(err);
        });
    },
    traerdepartamento() {
      axios
        .get("https://laboratorioan.herokuapp.com/api/ciudad/departamento")
        .then((res) => {
          console.log(res);
          this.depa.push(res.data.ciudades);
          console.log(this.depa);
        })
        .catch((err) => {
          this.alert = true;
          console.log(err);
          this.alert1 = true;
          this.alertas = err.response.data;

          console.log("revisar", this.alerta);
          this.alerta = err.response.data.errors;
          console.log(err.response.data.errors[0].msg);
        });
    },
    traerciudad() {
      let header = { headers: { "x-token": this.$store.state.token } };
      axios
        .get(
          `https://laboratorioan.herokuapp.com/api/ciudad/ciu/${this.departamento}`,
          header
        )
        .then((res) => {
          console.log(res);
          this.ciu = res.data.ciudades;
          console.log("ciudades", this.ciu);
        })
        .catch((err) => {
          this.alert = true;
          console.log(err);
          this.alert1 = true;
          this.alertas = err.response.data;

          console.log("revisar", this.alerta);
          this.alerta = err.response.data.errors;
          console.log(err.response.data.errors[0].msg);
        });
    },
  },

  created() {
    this.traerclientes();
    this.traerfuncionarios();
    this.traerdepartamento();
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
<style>

</style>