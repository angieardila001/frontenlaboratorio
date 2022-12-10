<template>
  <v-container fluid>
    <v-row>
      <v-col class="col-2">
        <v-img style="display: block; margin: 0 auto 0 auto"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sena_Colombia_logo.svg/1200px-Sena_Colombia_logo.svg.png"
          height="100" max-width="100"></v-img>
      </v-col>
      <v-col>
        <p class="text-center" id="p">RECEPCIÓN DE MUESTRAS</p>
        <v-row>
          <v-col>
            <p class="text-center" id="p">
              CENTRO AGROTURÍSTICO – SAN GIL, SANTANDER <br />
              LABORATORIO LABFICAT
            </p>
          </v-col>

        </v-row>
        <v-row class="py-0">
          <v-col>
            <p class="text-center" id="p">
              CÓDIGO <br />
              CAT–ST–MI–F–002
            </p>
          </v-col>
          <v-col>
            <p class="text-center" id="p">
              APROBACIÓN <br />
              2022-04-01
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row fluid align="center" class="justify-center ">
      <p class="black--text mb-0">Agregar cliente <v-btn icon @click="dialog = true">
          <v-icon class="black--text">mdi-account-plus-outline</v-icon>
        </v-btn>
      </p>
    </v-row>
    <v-row fluid align="center" class="justify-center primary">
      <p class=" white--text mb-0 ">Datos del Solicitante</p>
    </v-row>
    <v-row>
      <v-col class="col-6 ">
        <v-row>
          <v-col cols="4" class="segundo px-0 py-0">
            <p class="datos mb-0 white--text">Solicitante</p>
            <p class="datos mb-0 white--text">NIT / C.C</p>
            <p class="datos mb-0 white--text">Dirección</p>
            <p class="datos mb-0 white--text">Ciudad</p>
          </v-col>
          <v-col cols="8" v-for="(p, i) in clientes" :key="i" class="pl-0 mx-0 my-0 px-0 py-0">
            <p class="field mb-0 ">{{ p.nombre }}</p>
            <p class="field mb-0 ">{{ p.documento }}</p>
            <p class="field mb-0 ">{{ p.direccion }}</p>
            <p class="field mb-0 ">{{ p.ciudad.Ciudad }}</p>
          </v-col>
        </v-row>
      </v-col>

      <v-col class="col-6 black--text">
        <v-row>
          <v-col cols="6 " class="segundo px-0 py-0">
            <p class="datos mb-0 white--text">Departamento</p>
            <p class="datos mb-0 white--text">Contacto</p>
            <p class="datos mb-0 white--text">Teléfono</p>
            <p class="datos mb-0 white--text">Correo electrónico</p>
          </v-col>
          <v-col cols="6" v-for="(p, i) in clientes" :key="i" class="pl-0 mx-0 my-0 px-0 py-0">
            <p class="field mb-0 ">{{ p.ciudad.departamento }}</p>
            <p class="field mb-0 ">{{ p.contacto }}</p>
            <p class="field mb-0 ">{{ p.telefonoCo }}</p>
            <p class="field mb-0 ">{{ p.email }}</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row fluid align="center" class="justify-center primary">
      <p class=" white--text mb-0  ">Datos de la muestra</p>
    </v-row>
    <v-row fluid align="center" class="justify-center ">
      <v-btn  @click="dialog2 = true" icon class="black--text mb-0">Agregar Muestra
                    <v-icon class="black--text">mdi-plus-circle-multiple-outline</v-icon>
                </v-btn>
            
   
    </v-row>
    <v-data-table :headers="headers" :items="desserts" :items-per-page="1" class="elevation-1 mt-3"></v-data-table>
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
              <v-icon small class="mr-2" @click="clientes1(item)">
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
          <v-toolbar-title>Añadir Muestra</v-toolbar-title>
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
              <v-col cols="12" sm="6" md="4" v-for="(p, i) in clientes" :key="i">

                <v-text-field label="Solicitante" v-model="p.nombre" filled readonly outlined dense></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="codigo" label="Filled" filled readonly outlined dense></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-autocomplete v-for="(p, i) in depa" :key="i" v-model="departamento" :items="p"
                  :rules="departamentoRules" label="Departamento" outlined dense filled
                  background-color="grey lighten-2" class="font-weight-bold black--text" required></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-autocomplete @mouseover="traerciudad()" v-model="munRecoleccion" :hint="`${ciu.Ciudad}`" :items="ciu"
                  item-text="Ciudad" label="Ciudad" return-object :rules="ciudadRules" outlined dense filled
                  background-color="grey lighten-2" class="font-weight-bold black--text" required></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Direecion Toma Muestra" v-model="dirreccionTomaMuestra" outlined dense>
                </v-text-field>

              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Lugar de toma Muestra" v-model="lugarTomaMuestra" outlined dense>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Muestra recolectada por" v-model="muestraRecolectadaPor" outlined dense>
                </v-text-field>
              </v-col>



              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Procedimiento Muestreo" v-model="procedimientoMuestreo" outlined dense>
                </v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-autocomplete :hint="`${tipos.tipos}`" :items="tipos" item-text="tipos" label="Tipo Muestra"
                  return-object v-model="tipoMuestra" outlined dense filled background-color="grey lighten-2"
                  class="font-weight-bold black--text" required></v-autocomplete>

              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field label="matriz Muestra" v-model="matrizMuestra" outlined dense></v-text-field>
              </v-col>



              <v-col cols="12" sm="6" md="4">
                <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="date" label="Picker without buttons" prepend-icon="mdi-calendar" readonly
                      v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-dialog ref="dialog" v-model="modal2" :return-value.sync="time" persistent width="290px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="time" label="Hora De Recoleccion" prepend-icon="mdi-clock-time-four-outline"
                      readonly v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-time-picker v-if="modal2" v-model="time" full-width>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal2 = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.dialog.save(time)">
                      OK
                    </v-btn>
                  </v-time-picker>
                </v-dialog>
              </v-col>



              <v-col cols="12" sm="6" md="4">
                <v-autocomplete :hint="`${cotizacion.numCotizacion}+ ${cotizacion.estado}`" :items="cotizacion"
                  item-text="numCotizacion" label="elige la cotizacion" return-object v-model="cotizacion1" outlined
                  dense filled background-color="grey lighten-2" class="font-weight-bold black--text" required>
                </v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-autocomplete :hint="`${item}`" :items="item" item-text="nombre" label="Item" return-object
                  v-model="item1" outlined dense filled background-color="grey lighten-2"
                  class="font-weight-bold black--text" required></v-autocomplete>

              </v-col>


              <v-col cols="12">
                <v-btn @click="anadirmuestra()">
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
import axios from "axios"
export default {
  name: "PageRecepcion",
  data() {
    return {
      codigo: "El codigo se realiza automatico",
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      depa: [],
      time: null,
      munRecoleccion: "",
      dirreccionTomaMuestra: "",
      muestraRecolectadaPor: "",
      procedimientoMuestreo: "",
      lugarTomaMuestra: "",
      tipoMuestra: "",
      matrizMuestra: "",
      cotizacion1: "",
      item1: "",
      modal2: false,
      menu2: false,
      tipos: [],
      ciu: "",
      modal: true,
      dialog: false,
      dialog2: false,
      clientes2: [],
      item: [
        "Item1", "Item2", "Item3"
      ],
      desserts: [
        {
          name: "",
          calories: "",
          fat: "",
          carbs: "",
          protein: "",
          iron: "",
        },
        {
          name: "",
          calories: "",
          fat: "",
          carbs: "",
          protein: "",
          iron: "",
        },
        {
          name: "",
          calories: "",
          fat: "",
          carbs: "",
          protein: "",
          iron: "",
        },
        {
          name: "",
          calories: "",
          fat: "",
          carbs: "",
          protein: "",
          iron: "",
        },
        {
          name: "",
          calories: "",
          fat: "",
          carbs: "",
          protein: "",
          iron: "",
        },
        {
          name: "",
          calories: "",
          fat: "",
          carbs: "",
          protein: "",
          iron: "",
        },
        {
          name: "",
          calories: "",
          fat: "",
          carbs: "",
          protein: "",
          iron: "",
        },
        {
          name: "",
          calories: "",
          fat: "",
          carbs: "",
          protein: "",
          iron: "",
        },
      ],
      headers: [
        {
          text: "Código Muestra",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Municipio Recolección", value: "calories" },
        { text: "Dircción de toma de muestra", value: "fat" },
        { text: "Lugar de toma de muestra", value: "carbs" },
        { text: "Muestra recolectada por", value: "protein" },
        { text: "Procedimiento de muestreo", value: "iron" },
        { text: "Tipo de muestra", value: "iron" },
        { text: "Matriz de la muestra", value: "iron" },
        { text: "Fecha y hora de recolección", value: "iron" },
        { text: "Cotización", value: "iron" },
        { text: "Item de la cotización", value: "iron" },
        { text: "Observaciones", value: "iron" },
      ],
      cotizacion: [],
      search: "",
      titulo: [
        { text: "Tipo persona", align: "start", sortable: false, value: "tipopersona" },
        { text: "Nombre", value: "nombre" },
        { text: "Documento", value: "documento" },
        { text: "Direccion", value: "direccion" },
        { text: "Rol", value: "rol" },
        { text: 'Actions', value: 'actions', sortable: false },

      ],
      todo:"",
      clientes: [{ tipopersona: "-", nombre: "-", documento: "-", direccion: "-", ciudad: { Ciudad: "-", departamento: "-" }, contacto: "-", telefonoCo: "-", celular: "-", email: "-", rol: "-" }],
    };
  },
  methods: {
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
    traerclientes() {

      let header = { headers: { "x-token": this.$store.state.token } };
      let cliente = "cliente";
      axios
        .get(
          `https://laboratorioan.herokuapp.com/api/usuario/rol/${cliente}`,
          header
        )
        .then((res) => {

          console.log("clasificar", res);

          this.clientes2 = res.data.usuarios;

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
          this.clientes = []
          this.clientes.push(res.data.usuarios);
          this.dialog = false
          this.traercotizacion()
          this.traercotizacione()
          //agregar
        })
        .catch((err) => {
          console.log(err);
        });
    },
    traerciudad() {
      let header = { headers: { "x-token": this.$store.state.token } };
      axios
        .get(`https://laboratorioan.herokuapp.com/api/ciudad/ciu/${this.departamento}`, header)
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
    traercotizacion() {
      console.log(this.clientes[0]._id)
      let header = { headers: { "x-token": this.$store.state.token } };
      axios
        .get(`https://laboratorioan.herokuapp.com/api/servicio/usuario/${this.clientes[0]._id}`, header)
        .then((res) => {
          console.log("cotizacion", res);
          this.cotizacion = res.data.servicios

          console.log("ya coti", this.cotizacion)

        })
        .catch((err) => {

          console.log(err);

        });
    },
    traertipomuestra() {


      axios
        .get(
          `https://laboratorioan.herokuapp.com/api/tipomuestra`

        )
        .then((res) => {

          console.log("tipos", res);
          this.tipos = res.data.tipos
          console.log("ya tipos", this.tipos)


          //agregar
        })
        .catch((err) => {
          console.log(err);
        });

    },
    anadirmuestra() {
      console.log("id cliente", this.clientes[0]._id, "mun recoleccion ", this.munRecoleccion._id, "direccion", this.dirreccionTomaMuestra, "lygar", this.lugarTomaMuestra,"hor",this.time, "muestra recolectad", this.muestraRecolectadaPor, "procedimientoMuestreo", this.procedimientoMuestreo, "tipoMuestra", this.tipoMuestra._id, "matrizMuestra", this.matrizMuestra, "fecha", this.date, "cotizacion", this.cotizacion1._id, "item1", this.item1);
      this.todo = this.date+ " "+"-"+ " " + this.time
      console.log("todo",this.todo)

      let header = { headers: { "x-token": this.$store.state.token } };
      axios
        .post(
          `https://laboratorioan.herokuapp.com/api/muestra/post`, {
          solicitante: this.clientes[0]._id,
          munRecoleccion: this.munRecoleccion._id,
          direccionTomaMuestra: this.dirreccionTomaMuestra,
          lugarTomaMuestra: this.lugarTomaMuestra,
          muestraRecolectadaPor: this.muestraRecolectadaPor,
          procedimientoMuestreo: this.procedimientoMuestreo,
          tipoMuestra: this.tipoMuestra._id,
          matrizMuestra: this.matrizMuestra,
          fechaRecoleccion: this.todo,
          cotizacion: this.cotizacion1._id,
          item: this.item1
        }, header)
        .then((res) => {

          console.log(res);
          this.dialog2 = false
          this.$swal({
            icon: "success",
            title: "Registro de muestra correcto",
          });
          this.$router.push("/helo");
          //agregar
        })
        .catch((err) => {

          console.log(err);
        });
    },
    


  },
  created() {

    this.traerclientes();
    this.traerdepartamento();
    this.traertipomuestra();
  },
};
</script>


<style >
#p {
  font-family: Calibri;
  font-size: 15px;
  font-style: normal;
  font-variant: normal;
  font-weight: 700;
  line-height: 15.4px;
  text-align: center;
}

#t {
  font-family: Calibri;
  font-size: 12px;
  font-style: italic;
  font-variant: normal;
  font-weight: 700;
  line-height: 12px;
}

#text {
  font-family: Calibri;
  font-size: 15px;
  font-style: italic;
  font-variant: normal;
  font-weight: 700;
  line-height: 15px;
}

#t2 {
  font-family: Calibri;
  font-size: 14px;
  font-style: italic;
  font-variant: normal;
  font-weight: 700;
  line-height: 15px;
}

.datos {
  border: 0.3px solid black;
  max-height: 26px;

}

.field {
  max-height: 26px;
}
</style>