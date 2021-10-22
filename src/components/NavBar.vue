<template>
  <div>
    <v-app-bar app color="transparent" dark style="box-shadow:none">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-btn v-if="showbackbutton" text @click="goBack()">
        <v-icon>mdi-arrow-left-bold</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <!-- <v-btn text @click="logout">
        <span class="mr-2">signOut</span>
      </v-btn> -->
    </v-app-bar>
    <v-navigation-drawer
      class="py-0"
      v-model="drawer"
      app
      temperory
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              {{ userName }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Members</v-list-item-title>
        </v-list-item>
        <v-list-item
          link
          href="https://alternatedimension.in/contact.html"
          target="_blank"
        >
          <v-list-item-icon>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Contact Us</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list style="position:absolute;bottom:0;">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-lock</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title
              ><v-btn text @click="logout">
                <span class="mr-2">Logout</span>
              </v-btn></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <!-- <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-lock</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title
              ><v-btn text>
                <span class="mr-2">signOut</span>
              </v-btn></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import firebase from "firebase";

export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      userName: "",
      email: ""
    };
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    },
    goBack() {
      this.$router.push("/home");
    }
  },
  mounted() {
    let userId;
    let currentUser = firebase.auth().currentUser;
    if (currentUser != null) {
      userId = currentUser.uid;
      this.email = currentUser.email;
    }
    var firebaseRef = firebase.database().ref(userId);
    firebaseRef.once(
      "value",
      data => {
        const completeData = data.val();
        this.userName = completeData.userFullName;
      },
      () => {
        alert("error");
      }
    );
  },
  props: {
    showbackbutton: {
      type: Boolean,
      default: false
    },
    userdata: null,
    roomtitle: ""
  }
};
</script>
