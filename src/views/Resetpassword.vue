<template>
  <div class="login">
    <v-container>
      <v-layout wrap>
        <v-flex sm12 md6 offset-md3>
          <v-card elevation="4" light tag="section">
            <v-card-title>
              <v-layout align-center justify-space-between>
                <h3 class="headline">
                  Login
                </h3>
                <v-flex> </v-flex>
              </v-layout>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <p>Sign in with your username and password:</p>
              <template>
                <v-form>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          label="Username"
                          outlined
                          v-model="email"
                          color="#16BAA1"
                          :rules="[rules.required, rules.email]"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </template>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <router-link
                :to="{
                  name: 'Login'
                }"
                tag="v-btn"
                color="#16BAA1"
                style="background-color:transparent;box-shadow:none"
              >
                Back to login page
              </router-link>
              <v-spacer></v-spacer>
              <v-btn
                color="#16BAA1"
                @click="login()"
                class="white--text"
                :loading="loading"
              >
                <v-icon left>mdi-lock</v-icon>
                Submit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: null,
      loading: false,
      rules: {
        required: value => !!value || "Required.",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      }
    };
  },
  methods: {
    login() {
      this.loading = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          // Email sent.
          this.loading = false;
          alert("mail has been sent to yor email id to reset the password");
        })
        .catch(function(error) {
          this.loading = false;
          alert("Oops. " + error.message);
        });
    }
  }
};
</script>

<style scoped>
/* "scoped" attribute limit the CSS to this component only */
</style>
