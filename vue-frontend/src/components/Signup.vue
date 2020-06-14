<template>
  <v-app id="inspire">
      
    <v-main>
      <v-container
        class="fill-height"
        fluid
        id="ff"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Signup form</v-toolbar-title>
                <v-spacer></v-spacer>
               
              </v-toolbar>
              <v-card-text>
                <v-form @submit="registerUser">
                <li 
                v-for="error in errors" 
                :key="error">{{ error }}</li>
                  <v-text-field
                    label="id"
                    v-model="id"
                    name="id"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    label="fullname"
                    v-model="fname"
                    name="fullname"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>
                
                  <v-text-field
                    id="password"
                    v-model="pwd"
                    label="password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="registerUser">Sign Up</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  
  
  
  
  </v-app>
</template>

<script>
  import axios from 'axios'
  export default {
    props: {
      source: String,
    },
    data(){
        return{
                id:null,
                fname:null,
                pwd:null,
                errors: [],
            }
    },

    methods:{
        registerUser(evt){

        if (!this.id) {
        this.errors.push('ID required.');
        }

        if (!this.fullname) {
        this.errors.push('Name required.');
        }

        if (!this.password) {
        this.errors.push('Password required.');
        }

        evt.preventDefault()
        let config = {
          headers: {
              "x-api-key": "AIzaSyBYNgrLTQ3mI-tpxGPxHvRCi7MwE4NX0wU"
          }
        }
          const fd = new FormData();
          fd.append('id', this.id)
          fd.append('fullname', this.fname)
          fd.append('password', this.pwd)

          for (var value of fd.values()) {

                console.log(value);

                }
            for (var key of fd.keys()) {

            console.log(key);

            }
          axios.post("https://api.argos-solutions.io/v2/submissions/upload", fd,config)
          .then(res=>console.log(res))
          .catch(e=>console.log(e))
           
        }
    }
  }
</script>