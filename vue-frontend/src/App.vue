<template>
  <v-app>
    <v-app-bar
      app
      clipped-left     
    >
     
      <v-toolbar-title>
        <v-btn text>{{title}}</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
       <v-toolbar-title
        v-for="menu in menus"
        :key="menu.id"
        ><v-btn text v-bind:href="menu.route">{{menu.menu}}</v-btn></v-toolbar-title>
    </v-app-bar>

    <router-view></router-view>
    

  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      title: "My Vue App",
        menus: [
        { id: 1, menu: 'Home', route: "home" },
        { id: 2, menu: 'SignUp', route: "signup" },
  
      ],
    }),
    created () {

    },
  }
</script>