<template>
  <div>
    <v-app-bar color="primary">
      <v-app-bar-nav-icon
        class="secondary--text"
        @click="drawer = true">
        </v-app-bar-nav-icon>

      <v-toolbar-title class="text-white secondary--text ">LABFICAT</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn class="font-weight-black" icon>
      
        <v-list-item-title class="black--text">Salir</v-list-item-title>
        <v-icon class="black--text">mdi-logout</v-icon>
         
      </v-btn>
    <br>
     
    </v-app-bar>

    <v-navigation-drawer  v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/login">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
  
</template>
<script>
export default {
  name: "PageHeader",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>




