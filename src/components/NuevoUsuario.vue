<template>
  <v-container fluid
  id="fondo2"
  
    lazy-validation
  >
    <v-row justify="center">
      <v-col cols="12" md="8"  class="pa-6"  >
        <div id="borde" contain
     
        
          justify="center"
          class="
            my-12
            justify-center
            text-center
            black--text
            pa-4
            text-center
            s
            text-no-wrap
            rounded-xl
          ">
          <v-icon class="font-weight-black black--text">mdi-account</v-icon>
          <v-toolbar-title class="font-weight-black black--text">
            Registro
          </v-toolbar-title>
          <v-spacer></v-spacer>
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
           <v-autocomplete
              v-model="tipopersona"
              :items="items"
              :rules="tipopersonaRules"
              dense
              filled
              label="Tipo Persona"
              background-color="grey lighten-2"
              class="font-weight-bold black--text"
              required
            ></v-autocomplete>
             <v-autocomplete
              v-model="rol"
              :items="items2"
              :rules="rolRules"
              dense
              filled
              label="Rol"
              background-color="grey lighten-2"
              class="font-weight-bold black--text"
              required
            ></v-autocomplete>
            
        <v-text-field
          v-model="nombre"
          :counter="25"
          :rules="nombreRules"
          label="Nombre"
          background-color="grey lighten-2"
         class="font-weight-bold black--text"
          required
        ></v-text-field>
        <v-text-field
          v-model="documento"
          :counter="25"
          :rules="documentoRules"
         background-color="grey lighten-2"
         class="font-weight-bold black--text"
          label="Documento"
          required
        ></v-text-field>

        
      <v-text-field
          v-model="direccion"
          :counter="50"
          :rules="direccionRules"
         background-color="grey lighten-2"
         class="font-weight-bold black--text"
          label="direccion"
          required
        ></v-text-field>
        <v-autocomplete
              
              v-model="ciudad"
              :items="items"
              :rules="ciudadRules"
              dense
              filled
              label="Departamento"
              background-color="grey lighten-2"
              class="font-weight-bold black--text"
              required
            ></v-autocomplete>
        <v-autocomplete
              v-model="ciudad"
              :items="items"
              :rules="ciudadRules"
              dense
              filled
              label="Ciudad"
              background-color="grey lighten-2"
              class="font-weight-bold black--text"
              required
            ></v-autocomplete>
        <v-text-field
          v-model="contacto"
          :counter="25"
          :rules="contactoRules"
         background-color="grey lighten-2"
         class="font-weight-bold black--text"
          label="Contacto"
          required
        ></v-text-field>
     
      <v-text-field
          v-model="telefono"
          :counter="14"
          :rules="telefonoRules"
         background-color="grey lighten-2"
         class="font-weight-bold black--text"
          label="telefono"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          background-color="grey lighten-2"
         class="font-weight-bold black--text"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
            v-model="contraseña"
           :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'" 
            name="input-10-1"
            label="Contraseña"
            hint="Almenos 8 caracteres"
            counter
            background-color="grey lighten-2"
         class="font-weight-bold black--text"
            @click:append="show1 = !show1"
          ></v-text-field>

         <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="login()"
        >
          Registrar
        </v-btn>
      <v-btn  to="/helo" icon>
        Atras
      </v-btn>
      </div>
     <v-bottom-sheet v-model="sheet">
      <v-sheet
       justify=center
        class="text-center"
        height="600px"
      >
        <div class="py-3">
         Registro exitoso, Felicitaciones ya puedes ver nuestras Fabulosas peliculas.
         Por favor ir a Iniciar Sesión
        </div>
        <v-btn
         to="/helo"
          class="mt-6"
          text
          color="red"
          @click="sheet = !sheet"
        >
        Iniciar Sesion
        </v-btn>
        
      </v-sheet>
    </v-bottom-sheet>
    </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
  export default {
    name:"PageNuevoUsuario",
      data: () => ({
           items: [
        "Natural","juridica"
      ],
            items2: [
        "secretaria","especialista","tecnico"
      ],
      sheet: false,
      alert: false,
      alert1: false,
      alerta: [],
      alertas: [],
      valid: true,
      telefono:"",
      contacto:"",
      documento:"",
      dirrecion:"",
      tipopersona:'',
      rol: "",
       rolRules: [
       v => !!v || 'Rol es requerido',
        v => (v && v.length <= 40) || 'El rol tiene que ser maximo 40 caracteres',
      ],
      nombre: '',
       nombreRules: [
        v => !!v || 'Nombre es requerido',
         v => (v && v.length <= 25) || 'El nombre tiene que ser maximo 25 caracteres',
       ],
     
      ciudad:'',
       ciudadRules: [
        v => !!v || 'Ciudad es requerida',
        v => (v && v.length <= 25) || 'ciudad tiene que ser maximo 25 caracteres',
      ] ,
      
      email: '',
       emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail debe ser valido',
      ], 
      select: null,
      checkbox: false,
        show1: false,
        contraseña: '',
        rules: {
          required: value => !!value || 'Es requerido.',
          min: v => v.length >= 8 || 'Minimo 8 characteres',
        }, 
    }),

    methods: {
        
    login() {
 
      axios.post("http://localhost:4520/api/usuario/post", {tipopersona:this.tipopersona,
      rol:this.rol,nombre:this.nombre,documento:this.documento,direccion:this.direccion,
      ciudad:this.ciudad,contacto:this.contacto,
      telefono:this.telefono,email:this.email, password:this.contraseña})
      .then(res=>{
        console.log(res);
         this.sheet = !this.sheet
         this.$router.push("/login")
       
      })
      .catch(err =>{
        this.alert = true;
          console.log(err);
          this.alert1 = true;
          this.alertas = err.response.data;

          console.log("revisar", this.alerta);
          this.alerta = err.response.data.errors;
          console.log(err.response.data.errors[0].msg);
      })
    },
    
    },
  }
</script>
<style >
#borde{
   background: white;
 
  justify-content: center;
  text-justify: center;
  border: solid 3px rgb(239, 138, 14)  !important;
}

</style>