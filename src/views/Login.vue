<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height fill-width>
        <v-layout align-center justify-center>
          <v-flex xs12 sm12 md12 lg12 fill-height>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                      name="email"
                      label="Email"
                      type="text"
                      v-model="email"
                  ></v-text-field>
                  <v-text-field
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      v-model="password"
                  ></v-text-field>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="sx-4" @click="socialLogin">Login with Google</v-btn>
                  </v-card-actions>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import firebase from 'firebase';

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        login() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    alert('Successfully logged in');
                    this.$router.push('/home');
                })
                .catch(error => {
                    alert(error.message);
                });
        },
      socialLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(() => {
          alert('Successfully logged in');
          this.$router.push('/home');
        })
            .catch(error => {
              alert(error.message);
            });
      }
    },
};
</script>