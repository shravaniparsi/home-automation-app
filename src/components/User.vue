<template>
  <div class="user" style="height:50vh">
    <v-container>
      <v-layout wrap>
        <v-flex>
          <v-card elevation="0" tag="section">
            <v-card-title style="height:53vh">
              <v-layout align-center justify-center class="white--text overline" style="font-size:18px!important">
                Nueva Smart Home
              </v-layout>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "NewUser",
  components: {},
  data() {
    return {
      userName: ""
    };
  },
  mounted() {
    let userId;
    let currentUser = firebase.auth().currentUser;
    if (currentUser != null) {
      userId = currentUser.uid;
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
  }
};
</script>
<style lang="scss" scoped>
.v-card {
  background-color: transparent !important;
}
.headline {
  text-align: center;
}
</style>
