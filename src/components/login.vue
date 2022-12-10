<template >
  <v-container fluid style="height: 100%">
    <v-row
      class="
        my-12
        justify-center
        text-center
        white--text
        pa-4
        text-center text-no-wrap
        rounded-xl
      "
    >
      <v-col cols="8">
        <v-col
          contain
          id="cuadro"
          cols="11"
          class="
            mb-12
            justify-center
            text-center
            white--text
            pa-4
            text-center text-no-wrap
            rounded-xl
          "
        >
          <br />
          <br />
          <br />
          <v-icon class="font-weight-black black--text">mdi-account</v-icon>
          <v-toolbar-title class="font-weight-black black--text">
            Iniciar Sesión
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="correo"
            :counter="20"
            :rules="correoRules"
            label="Correo"
            required
            background-color="grey lighten-3"
            class="font-weight-bold black--text"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Contraseña"
            hint="Almenos 8 caracteres"
            counter
            @click:append="show1 = !show1"
            background-color="grey lighten-3"
            class="font-weight-bold black--text"
          ></v-text-field>

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
            {{ alertas.msg }}
          </v-alert>
          <v-btn
            block
            color="primary"
            elevation="8"
            x-large
            x-small
            class="mr-4 justify-center black--text"
            @click="login()"
          >
            Iniciar Sesión</v-btn
          >
          <br />
          <br />
          <br />
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  name: "PageLogin",
  data() {
    return {
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
      rules: {
        required: (value) => !!value || "Es requerido.",
        min: (v) => v.length >= 8 || "Minimo 8 characteres",
      },
    };
  },

  methods: {
    login() {
      axios
        .post("https://laboratorioan.herokuapp.com/api/usuario/login", {
          email: this.correo,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          this.$store.dispatch("setToken", res.data.token);
          this.$store.dispatch("setDatos", res.data.usuario);
          this.$router.push("/helo");
          this.$swal({
            icon: "success",
            title: "Inicio de sesión correcto",
          });
        })
        .catch((err) => {
          if (err.response.data.msg === "Usuario / Password no son correctos") {
            /* this.alert1 = true;
            this.alertas = err.response.data; */
            
            this.$swal({
              icon: "error",
              title: "Error password / email incorrectos",
            });
          } else {
            this.alert = true;

            console.log(err);
            console.log("revisar", this.alerta);
            this.alerta = err.response.data.errors;
            console.log(err.response.data.errors[0].msg);
          }
        });
    },
  },
};
</script>
<style>
#cuadro {
  background: white;

  justify-content: center;
  text-justify: center;
  border: solid 3px rgb(239, 138, 14) !important;
}
</style>