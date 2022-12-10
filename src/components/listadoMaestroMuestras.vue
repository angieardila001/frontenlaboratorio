<template >
  <v-container fluid style="height: 100%">
    <v-card-title>
      MUESTRAS

      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" single-line hide-details>
      </v-text-field>
    </v-card-title>
    <br>
    <v-row fluid align="end" class="justify-end">
      <v-btn class="primary black--text" @click="agregar()">Agregar Muestra
        <v-icon class="black--text">mdi-plus-circle-multiple-outline</v-icon>
      </v-btn>

    </v-row>
    <br>

    <v-data-table :headers="headers" :items="muestras" :search="search" :items-per-page="10" class="elevation-1 mt-3">
      <template v-slot:[`item.actions`]="{ item }">

        <v-icon v-if="item.estado == 0" small class="mr-2" color="green" @click="activar(item)">
          mdi-check
        </v-icon>
        <v-icon v-else small class="mr-2" color="red" @click="desactivar(item)">
          mdi-cancel
        </v-icon>

      </template>
      <template v-slot:[`item.ver`]="{ item }">

        <v-icon small class="mr-2" color="green" @click="mostrar(item)">
          mdi-eye
        </v-icon>

      </template>

      <template v-slot:[`item.estado`]="{ item }">

        <span v-if="item.estado == 0" small class="mr-2 red--text" @click="activar(item)">
          Inactivo
        </span>
        <span v-else small class="mr-2 green--text" @click="desactivar(item)">
          Activo
        </span>

      </template>
    </v-data-table>
    <v-dialog v-model="dialog">
      <v-card tile>
        <v-toolbar flat dark color="primary">
          <v-btn icon dark @click="dialog = false">
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
              <v-col cols="12" sm="6" md="4" v-for="(p, i) in cliente" :key="i">

                <v-text-field label="Solicitante" v-model="p.nombre" filled readonly outlined dense></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="detalle.codMuestra" label="Codigo Muestra" filled readonly outlined dense>
                </v-text-field>
              </v-col>


              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Direecion Toma Muestra" v-model="detalle.direccionTomaMuestra" filled readonly
                  outlined dense>
                </v-text-field>

              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Lugar de toma Muestra" v-model="detalle.lugarTomaMuestra" filled readonly outlined
                  dense>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Muestra recolectada por" v-model="detalle.muestraRecolectadaPor" filled readonly
                  outlined dense>
                </v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Fecha Recoleccion" v-model="detalle.fechaRecoleccion" filled readonly outlined
                  dense>
                </v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Procedimiento Muestreo" v-model="detalle.procedimientoMuestreo" filled readonly
                  outlined dense>
                </v-text-field>
              </v-col>


              <v-col cols="12" sm="6" md="4">
                <v-text-field label="matriz Muestra" v-model="detalle.matrizMuestra" filled readonly outlined dense>
                </v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Item" v-model="detalle.item" filled readonly outlined dense>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4" v-for="(p, i) in muni" :key="i">
                <v-text-field label="mun recoleccion" v-model="p.Ciudad" filled readonly outlined dense>
                </v-text-field>
              </v-col>                            

            </v-row>
            <v-row fluid align="center" class="justify-center"  v-for="(p, i) in cotizacion" :key="i">
              <h3 >COTIZACION</h3>
              <br>
              <br>
           
              </v-row>
            <v-row fluid align="center" class="justify-center"  >
             
              <v-col cols="12" sm="6" md="4" v-for="(p, i) in cotizacion" :key="i">
                <v-text-field label="cotizacion" v-model="p.numCotizacion" filled readonly outlined dense>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4" v-for="(p, i) in cotizacion" :key="i">
                <v-text-field label="Total" v-model="p.total" filled readonly outlined dense>
                </v-text-field>
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
  name: "ListadoMuestra",
  data() {
    return {
      cliente: [],
      cotizacion: [],
      muni: [],
      items:[],
      dialog: false,
      munRecoleccion: "",
      dirreccionTomaMuestra: "",
      muestraRecolectadaPor: "",
      procedimientoMuestreo: "",
      lugarTomaMuestra: "",
      tipoMuestra: "",
      matrizMuestra: "",
      cotizacion1: "",
      item1: "",
      search: "",
      alert: false,
      alert1: false,
      detalle: [],
      headers: [
        { text: 'Ver', value: 'ver', sortable: false },
        {
          text: "Código Muestra",
          align: "start",

          value: "codMuestra",
        },
        { text: "Municipio Recolección", value: "munRecoleccion.Ciudad" },
        { text: "Nombre del cliente", value: "solicitante.nombre" },
        { text: "CC / NIT del cliente", value: "solicitante.documento" },
        { text: "Muestra recolectada por", value: "muestraRecolectadaPor" },
        { text: "Procedimiento de muestreo", value: "procedimientoMuestreo" },
        { text: "Tipo de muestra", value: "tipoMuestra.tipos" },
        { text: "Matriz de la muestra", value: "matrizMuestra" },
        { text: "Fecha y hora de recolección", value: "fechaRecoleccion" },
        { text: "Cotización", value: "cotizacion.numCotizacion" },
        { text: "Item de la cotización", value: "item" },
        { text: 'Activar', value: 'actions', sortable: false },
        { text: 'Estado', value: 'estado', sortable: false },

      ],
      muestras: [],

    };
  },

  methods: {
    agregar() {
      this.$router.push("/recepcionmuestra");
    },
    traermuestras() {
      axios
        .get(
          `https://laboratorioan.herokuapp.com/api/muestra`)
        .then((res) => {
          console.log(res);
          this.muestras = res.data.muestras
          //agregar
        })
        .catch((err) => {
          console.log(err);
        });

    },
    activar(item) {
      console.log(item)
      let header = { headers: { "x-token": this.$store.state.token } };
      console.log("re", header);
      axios
        .put(
          `https://laboratorioan.herokuapp.com/api/muestra/activar/${item._id}`, {},
          header
        )
        .then((res) => {
          console.log(res);
          this.traermuestras()

        })
        .catch((err) => {
          console.log(err);
        });
    },
    desactivar(item) {
      console.log(item)
      let header = { headers: { "x-token": this.$store.state.token } };

      axios
        .put(
          `https://laboratorioan.herokuapp.com/api/muestra/desactivar/${item._id}`, {},
          header
        )
        .then((res) => {
          console.log(res);
          this.traermuestras()

          //agregar
        })
        .catch((err) => {
          console.log(err);
        });
    },
    mostrar(item) {
      this.dialog = true;
      console.log("item", item)

      let header = { headers: { "x-token": this.$store.state.token } };
      axios
        .get(
          `https://laboratorioan.herokuapp.com/api/muestra/id/${item._id}`, header)
        .then((res) => {
          console.log(res);
          this.detalle = res.data.muestras;
          this.cliente.push(res.data.muestras.solicitante);
          this.cotizacion.push(res.data.muestras.cotizacion);
          this.muni.push(res.data.muestras.munRecoleccion);
          this.items.push(res.data.muestras.cotizacion.items);
          
          console.log("cotiz", this.items)
          //agregar
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  created() {
    this.traermuestras();

  },
};
</script>
<style>

</style>