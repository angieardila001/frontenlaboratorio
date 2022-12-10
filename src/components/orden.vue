<template >
    <v-container fluid style="height: 100%">
        <v-card-title>
             MUESTRAS

              <v-spacer></v-spacer>
              <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" single-line hide-details>
              </v-text-field>
            </v-card-title>
            <br>
       
        <br>
       
        <v-data-table :headers="headers" :items="orden"  :search="search" :items-per-page="10" class="elevation-1 mt-3">
            <template>
            
            <span v-if="item.estado==0" small class="mr-2 red--text" >
              Inactivo
            </span>
            <span v-else small class="mr-2 green--text" >
              Activo
            </span>
          </template>
        </v-data-table>
    </v-container>
</template>
<script>
import axios from "axios";
export default {
    name: "pageOrden",
    data() {
        return {
            orden:[],
            search: "",
            alert: false,
            alert1: false,
            headers: [
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
            muestras:[],
          
        };
    },

    methods: {
       
        traerorden() {
            axios
                .get(
                    `https://laboratorioan.herokuapp.com/api/orden`)
                .then((res) => {
                    console.log(res);
                    this.orden=res.data.servicio
                    //agregar
                })
                .catch((err) => {
                    console.log(err);
                });

        },
       
    },
    created() {

        this.traerorden();

    },
};
</script>
<style>

</style>