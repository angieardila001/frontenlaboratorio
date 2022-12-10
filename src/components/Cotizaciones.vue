<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col class="col-2">
          <v-img
            style="float: right"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sena_Colombia_logo.svg/1200px-Sena_Colombia_logo.svg.png"
            height="120"
            max-width="120"
          ></v-img>
        </v-col>
        <v-col class="col-6">
          <h5 class="text-center text-decoration-underline" id="p">
            Oferta de servicios
          </h5>
          <p class="text-center" id="t">
            "Laboratorio de Caracterización Fisicoquímica de Alimentos del
            Centro Agroturístico “LABFICAT” de San Gil, Santander <br />
            NIT: 899.999.034 <br />
            Dirección: Calle 22 No. 09 – 82, San Gil, Santander <br />
            Teléfono: (607) 7248113 <br />
            Correo electrónico: labficat@sena.edu.co"
          </p>
        </v-col>
        <v-col class="col-2">
          <h5 class="text-center" id="text">Cotizacion N° <br /></h5>
          <p class="text-center red--text mt-1" id="text">XXXX-XXXXVX</p>
          <p class="text-center black--text mt-1" id="text">Fecha emisión.</p>
          <p class="text-center red--text mt-1" id="text">
            {{ new Date().getFullYear() }}-{{ new Date().getMonth() }}-{{
              new Date().getDate()
            }}
          </p>
        </v-col>
        <v-col class="col-2 tex-center">
          <h6 class="text-center" id="t2">
            código <br />
            CAT-ST-OC-F-002
          </h6>
          <p class="text-center" id="t2">
            Aprobación <br />
            2021-08-30
          </p>
          <p class="text-center" id="t2">
            Versión <br />
            1
          </p>
        </v-col>
      </v-row>
      <v-row fluid align="center" class="justify-center">
        <p class="black--text mb-0">
          Agregar cliente
          <v-btn icon @click="dialog = true">
            <v-icon class="black--text">mdi-account-plus-outline</v-icon>
          </v-btn>
        </p>
      </v-row>
      <v-row fluid align="center" class="justify-center primary">
        <p class="white--text mb-0">1. Datos del Cliente</p>
      </v-row>
      <v-row>
        <v-col class="col-6">
          <v-row>
            <v-col cols="4" class="segundo px-0 py-0">
              <p class="datos mb-0 white--text">Cliente</p>
              <p class="datos mb-0 white--text">Dirección</p>
              <p class="datos mb-0 white--text">Departamento</p>
              <p class="datos mb-0 white--text">Contacto</p>
              <p class="datos mb-0 white--text">Celular</p>
              <p class="datos mb-0 white--text">Validez de oferta</p>
              <p class="datos mb-0 white--text">Elaborado por:</p>
            </v-col>
            <v-col
              cols="8"
              v-for="(p, i) in clientes"
              :key="i"
              class="mx-0 my-0 px-0 py-0"
            >
              <p class="field mb-0">{{ p.nombre }}</p>
              <p class="field mb-0">{{ p.direccion }}</p>
              <p class="field mb-0">{{ p.ciudad.departamento }}</p>
              <p class="field mb-0">{{ p.contacto }}</p>
              <p class="field mb-0">{{ p.telefonoCo }}</p>
              <p class="field mb-0">validezOferta </p>
              <p class="field mb-0">{{ p.nombre }}</p>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="col-6">
          <v-row>
            <v-col cols="6 " class="segundo px-0 py-0">
              <p class="datos mb-0 white--text">NIT / C.C</p>
              <p class="datos mb-0 white--text">Ciudad</p>
              <p class="datos mb-0 white--text">Teléfono</p>
              <p class="datos mb-0 white--text">Cargo</p>
              <p class="datos mb-0 white--text">Correo electrónico</p>
              <p class="datos mb-0 white--text">Entrega de resultados</p>
              <p class="datos mb-0 white--text">Cargo</p>
            </v-col>
            <v-col
              cols="6"
              v-for="(p, i) in clientes"
              :key="i"
              class="mx-0 my-0 px-0 py-0"
            >
              <p class="field mb-0">{{ p.documento }}</p>
              <p class="field mb-0">{{ p.nombre }}</p>
              <p class="field mb-0">{{ p.ciudad.Ciudad }}</p>
              <p class="field mb-0">{{ p.tipopersona }}</p>
              <p class="field mb-0">{{ p.email }}</p>
              <p class="field mb-0">entregaResultados </p>
              <p class="field mb-0">{{ p.nombre }}</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row fluid align="center" class="justify-center primary">
        <p class="white--text mb-0">2.Propuesta técnica y económica</p>
      </v-row>
      <v-row fluid align="center" class="justify-center primary">
        <v-col cols="10">
          <p class="white--text mb-0 text-center">ítem 1</p>
        </v-col>
        <v-col cols="2">
          <v-btn
            class="white--text x-small"
            color="primary"
            align="justify end"
            @click="dialogensayo = true"
            >Agregar ensayo</v-btn
          >
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="datos"
        :items-per-page="8"
        class="elevation-1 mt-3"
      >
      </v-data-table>
      <v-row fluid class="justify-center mb-0 py-0 px-0 mx-0">
        <v-col cols="11">
          <p class="white--text mb-0 primary">Costo ítem1</p>
        </v-col>

        
      </v-row>
      <v-row fluid align="center" class="justify-center primary">
        <v-col cols="10">
          <p class="white--text mb-0 text-center">ítem 2</p>
        </v-col>

        <v-col cols="2">
          <v-btn
            class="white--text x-small"
            color="primary"
            align="justify end"
            @click="dialogensayo2 = true"
            >Agregar ensayo</v-btn
          >
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers1"
        :items="segundoItem"
        :items-per-page="8"
        class="elevation-1 mt-3"
      ></v-data-table>
      <v-row fluid align="center" class="justify-center primary">
        <v-col cols="10">
          <p class="white--text mb-0 text-center">ítem 3</p>
        </v-col>
        <v-col cols="2">
          <v-btn
            class="white--text x-small"
            color="primary"
            align="justify end"
            @click="dialogensayo3 = true"
            >Agregar ensayo</v-btn
          >
        </v-col>
        
      </v-row>

      <v-data-table
        :headers="headers3"
        :items="tercerItem"
        :items-per-page="8"
        class="elevation-1 mt-3"
      ></v-data-table>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Observaciones"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Descuento"
            outlined
          ></v-text-field>
        </v-col>
        <v-col><v-btn
        class="white--text x-small"
        color="primary"
        align="justify end"
        @click="cotizacion()"
        >Subir Cotizacion</v-btn></v-col>
        
      </v-row>
      
      
      
    </v-container>
    <!-- dialogo clientes -->
    <v-dialog v-model="dialog">
      <v-card tile>
        <v-toolbar flat dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Clientes</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false"> Save </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card>
          <v-card-title>
            Clientes

            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            >
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

        <div style="flex: 1 1 auto"></div>
      </v-card>
    </v-dialog>
    <!-- dialogo item 1 -->
    <v-dialog v-model="dialogensayo">
      <v-card tile>
        <v-toolbar flat dark color="primary">
          <v-btn icon dark @click="dialogensayo = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Ensayos</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialogensayo = false"> Save </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card>
          <v-card-title
            >Ensayos<v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Buscar"
              single-line
              hide-details
            >
            </v-text-field>
          </v-card-title>
          <v-data-table :headers="titulo2" :items="ensayo" :search="search">
            <template v-slot:[`item.actions2`]="{ item }">
              <v-icon class="mr-2" @click="ensayoid(item)">
                mdi-plus-circle
              </v-icon>
            </template>
          </v-data-table>
        </v-card>

        <div style="flex: 1 1 auto"></div>
      </v-card>
    </v-dialog>

    <!-- dialogo item 2 -->
    <v-dialog v-model="dialogensayo2">
      <v-card tile>
        <v-toolbar flat dark color="primary">
          <v-btn icon dark @click="dialogensayo2 = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Ensayos</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialogensayo2 = false"> Save </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card>
          <v-card-title>
            Ensayos

            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Buscar"
              single-line
              hide-details
            >
            </v-text-field>
          </v-card-title>
          <v-data-table :headers="titulo2" :items="ensayo2" :search="search">
            <template v-slot:[`item.actions2`]="{ item }">
              <v-icon class="mr-2" @click="ensayoid2(item)">
                mdi-plus-circle
              </v-icon>
            </template>
          </v-data-table>
          
        </v-card>

        <div style="flex: 1 1 auto"></div>
      </v-card>
    </v-dialog>
    <!-- dialogo item 3 -->
    <v-dialog v-model="dialogensayo3">
      <v-card tile>
        <v-toolbar flat dark color="primary">
          <v-btn icon dark @click="dialogensayo3 = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Ensayos</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialogensayo3 = false"> Save </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card>
          <v-card-title>
            Ensayos

            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Buscar"
              single-line
              hide-details
            >
            </v-text-field>
          </v-card-title>
          <v-data-table :headers="titulo2" :items="ensayo3" :search="search">
            <template v-slot:[`item.actions2`]="{ item }">
              <v-icon class="mr-2" @click="ensayoid3(item)">
                mdi-plus-circle
              </v-icon>
            </template>
          </v-data-table>
        </v-card>

        <div style="flex: 1 1 auto"></div>
      </v-card>
    </v-dialog>
  </div>
</template>
  
<script>
import axios from "axios";
export default {
  name: "PageCotizacion",
  data() {
    return {
      ensayo: [],
      ensayo2: [],
      ensayo3: [],
      dialog: false,
      dialogensayo: false,
      dialogensayo2: false,
      dialogensayo3: false,
      clientes2: [],
      clientes: [
        {
          tipopersona: "-",
          nombre: "-",
          documento: "-",
          direccion: "-",
          ciudad: { Ciudad: "-", departamento: "-" },
          contacto: "-",
          telefonoCo: "-",
          celular: "-",
          email: "-",
          rol: "-",
        },
      ],
      datos: [],
      segundoItem: [],
      tercerItem: [],
      item1: { itemsEnsayo: [] },
      item2: { itemsEnsayo: [] },
      item3: { itemsEnsayo: [] },
      search: "",
      titulo: [
        {
          text: "Tipo persona",
          align: "start",
          sortable: false,
          value: "tipopersona",
        },
        { text: "Nombre", value: "nombre" },
        { text: "Documento", value: "documento" },
        { text: "Direccion", value: "direccion" },
        { text: "Rol", value: "rol" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      titulo2: [
        {
          text: "Tipo ensayo",
          align: "start",
          sortable: false,
          value: "tipo_ensayo",
        },
        { text: "Metodo", value: "metodo", sortable: false },
        { text: "Costo", value: "costo", sortable: false },
        { text: "Valor Minimo", value: "valorMinimo", sortable: false },
        { text: "Valor Maximo", value: "valorMaximo", sortable: false },
        { text: "Tecnica", value: "tecnica", sortable: false },
        { text: "", value: "actions2", sortable: false },
      ],
      costo: "",
      limiteCuantificacion: "",
      titular: "",
      suplente: "",
      tipo_ensayo: "",
      metodo: "",
      tecnica: "",
      valorMinimo: "",
      valorMaximo: "",
      unidades: "",
      descripcion: "",
      codigoreferencia: "",
      fechaEmision: new Date(),
      id: "",
      validezOferta: "2022-11-12",
      entregaResultados: "2022-11-30",
      elaboradoPor: "636c66eecb784343b7aa87a7",
      items: {
        item1: "",
        item2: "",
        item3: "",
      },
      observaciones: "",
      descuento: 0,
      headers1: [
        {
          text: "Código Referencia",
          align: "start",
          sortable: false,
          value: "tipo_ensayo",
        },
        { text: "Descripción del ensayo", value: "descripcion" },
        { text: "Unidades", value: "unidades" },
        { text: "Técnica analítica", value: "tecnica" },
        { text: "Método analítico", value: "metodo" },
        { text: "Límite de cuantificación", value: "limiteCuantificacion" },
        { text: "Costo del ensayo", value: "costo" },
      ],
      headers: [
        {
          text: "Código Referencia",
          align: "start",
          sortable: false,
          value: "tipo_ensayo",
        },
        { text: "Descripción del ensayo", value: "descripcion" },
        { text: "Unidades", value: "unidades" },
        { text: "Técnica analítica", value: "tecnica" },
        { text: "Método analítico", value: "metodo" },
        { text: "Límite de cuantificación", value: "limiteCuantificacion" },
        { text: "Costo del ensayo", value: "costo" },
      ],
      headers3: [
        {
          text: "Código Referencia",
          align: "start",
          sortable: false,
          value: "tipo_ensayo",
        },
        { text: "Descripción del ensayo", value: "descripcion" },
        { text: "Unidades", value: "unidades" },
        { text: "Técnica analítica", value: "tecnica" },
        { text: "Método analítico", value: "metodo" },
        { text: "Límite de cuantificación", value: "limiteCuantificacion" },
        { text: "Costo del ensayo", value: "costo" },
      ],
    };
  },
  methods: {
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
      this.id = item._id;
      console.log(item);
      let header = { headers: { "x-token": this.$store.state.token } };

      axios
        .get(
          `https://laboratorioan.herokuapp.com/api/usuario/id/${item._id}`,
          header
        )
        .then((res) => {
          console.log(res);
          this.clientes = [];
          this.clientes.push(res.data.usuarios);
          this.dialog = false;

          //agregar
        })
        .catch((err) => {
          console.log(err);
        });
    },
    traerensayos() {
      axios
        .get(`https://laboratorioan.herokuapp.com/api/ensayo`)
        .then((res) => {
          console.log(res);
          this.ensayo = res.data.ensayos;
          this.ensayo2 = res.data.ensayos;
          this.ensayo3 = res.data.ensayos;

          //agregar
        })
        .catch((err) => {
          console.log(err);
        });
    },
    ensayoid(item) {
      let item1 = null;
      item1 = this.datos.find((e) => e._id == item._id);
      if (item1 == undefined) {
        this.datos.push(item);
        this.item1.itemsEnsayo.push({
          ensayo: item._id,
          limiteCuantificacion: item.limiteCuantificacion,
          costoEnsayo: item.costoEnsayo,
        });
        this.dialogensayo = false;
      } else {
        this.$swal({
          icon: "error",
          title: "Ensayo ya ingresado",
        });
      }
    },
    ensayoid2(item) {
      let item2 = null;
      item2 = this.segundoItem.find((e) => e._id == item._id);
      if (item2 == undefined) {
        this.segundoItem.push(item);
        this.item2.itemsEnsayo.push({
          ensayo: item._id,
          limiteCuantificacion: item.limiteCuantificacion,
          costoEnsayo: item.costoEnsayo,
        });
        this.dialogensayo2 = false;
      } else {
        this.$swal({
          icon: "error",
          title: "Ensayo ya ingresado",
        });
      }
    },
    ensayoid3(item) {
      let item3 = null;
      item3 = this.tercerItem.find((e) => e._id == item._id);
      if (item3 == undefined) {
        this.tercerItem.push(item);
        this.item3.itemsEnsayo.push({
          ensayo: item._id,
          limiteCuantificacion: item.limiteCuantificacion,
          costoEnsayo: item.costoEnsayo,
        }),
          (this.dialogensayo3 = false);
      } else {
        this.$swal({
          icon: "error",
          title: "Ensayo ya ingresado",
        });
      }
    },
    cotizacion() {
      let header = { headers: { "x-token": this.$store.state.token } };
      axios
        .post(
          `https://laboratorioan.herokuapp.com/api/servicio/post`,
          {
            fechaEmision: this.fechaEmision,
            idCliente: this.id,
            validezOferta:this.validezOferta,
            entregaResultados: this.entregaResultados,
            elaboradoPor: this.elaboradoPor,
            items: {
              item1: this.item1,
              item2: this.item2,
              item3: this.item3,
            },
            observaciones: this.observaciones,
            descuento: this.descuento,
          },
          header
        )
        .then((res) => {
          console.log(res);
          this.$swal({
            icon: "success",
            title: "Ensayo ya ingresado",
          });
          
        })
        .catch((err) => {
          console.log(err);
          this.$swal({
            icon: "error",
            title: "Ensayo ya ingresado",
          });
          
        });
    },
  },

  created() {
    this.traerclientes();
    this.traerensayos();
  },
};
</script>
  
<style >
#p {
  font-family: Calibri;
  font-size: 18px;
  font-style: italic;
  font-variant: normal;
  font-weight: 800;
  line-height: 14px;
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
  border: 0.3px solid black;
  max-height: 26px;
}
</style>