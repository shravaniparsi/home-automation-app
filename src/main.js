import "@babel/polyfill";
import Vue from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router/index";
import firebase from "firebase";
import * as admin from "firebase-admin";
import "@mdi/font/css/materialdesignicons.css";
Vue.config.productionTip = false;

let app = "";
const firebaseConfig = {
  apiKey: "AIzaSyBBNyC4e1xCcqkrRsC1lEiNwdZLfqXtnOQ",
  authDomain: "smarthome-fcce5.firebaseapp.com",
  databaseURL: "https://smarthome-fcce5-default-rtdb.firebaseio.com",
  projectId: "smarthome-fcce5",
  storageBucket: "smarthome-fcce5.appspot.com",
  messagingSenderId: "51169223417",
  appId: "1:51169223417:web:2b45f7307dabe2ad1e3828",
  measurementId: "G-KPG5HJVHFK"
};

firebase.initializeApp(firebaseConfig);
admin.initializeApp();

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
});

// Wait for the deviceready event to start the render
document.addEventListener("deviceready", () => {
  // eslint-disable-next-line
  console.log("Ready, Render the App");
  app();
});

// If we are not in Cordova, manually trigger the deviceready event
const isCordovaApp = typeof window.cordova !== "undefined";
if (!isCordovaApp) {
  document.dispatchEvent(new CustomEvent("deviceready", {}));
}
