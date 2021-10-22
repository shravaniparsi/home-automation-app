<template>
  <MainPage v-if="!isAdmin"></MainPage>
  <AdminPage v-else></AdminPage>
</template>

<script>
import MainPage from "../components/MainPage";
import AdminPage from "../components/AdminPage";
import firebase from "firebase";

export default {
  name: "Home",
  data() {
    return {
      isAdmin: Boolean
    };
  },
  components: {
    MainPage,
    AdminPage
  },

  mounted() {
    let currentUser = firebase.auth().currentUser;
    this.isAdmin = currentUser.email === "alternatedimensionlab@gmail.com";
  }
};
</script>
