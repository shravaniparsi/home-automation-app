<template>
  <div>
    <NavBar
      :showbackbutton="true"
      :roomtitle="roomtitle"
      :userdata="userdata"
    ></NavBar>
    <div class="user" style="height:20vh">
      <v-container>
        <v-layout wrap>
          <v-flex>
            <v-card
              elevation="0"
              tag="section"
              style="background-color:transparent"
            >
              <v-card-title style="height:16vh">
                <v-layout>
                  <div>
                    <v-list-item-avatar tile color="white">
                      <div
                        id="curtain"
                        v-if="plug.type === 'geyser' && plug.value"
                      >
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <v-icon medium color="blue">{{
                          getIcon(plug.type, plug.value)
                        }}</v-icon>
                      </div>
                      <div
                        id="curtain"
                        v-else-if="plug.type === 'curtain'"
                        :class="{
                          'disabled-curtain': !plug.value
                        }"
                      >
                        <div id="curtain-left"></div>
                        <div id="curtain-right"></div>
                        <div id="curtain-bar"></div>
                      </div>
                      <v-list-item-icon v-else>
                        <v-icon
                          large
                          :color="getColor(plug.value, plug.type)"
                          :class="{
                            'fa-beat': plug.value && plug.type === 'light-bulb',
                            'circle-fan':
                              plug.value &&
                              (plug.type === 'fan' ||
                                plug.type === 'air-conditioner'),
                            boil: plug.value && plug.type === 'geyser'
                          }"
                        >
                          {{ getIcon(plug.type, plug.value) }}</v-icon
                        >
                      </v-list-item-icon>
                    </v-list-item-avatar>
                    <br />
                    <span class="text-capitalize white--text">{{
                      getType(plug.type)
                    }}</span>
                  </div>
                </v-layout>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <v-container fluid class="pa-0" style="margin-top:-8px">
      <v-row dense class="ma-2">
        <v-col cols="12">
          <v-card>
            <v-list-item class="">
              <v-list-item-content>
                <v-row
                  no-gutters
                  class="flex-nowrap"
                  style="align-items:baseline"
                >
                  <v-col cols="10">
                    <v-list-item-title class="subtitle-1 mb-1 ml-3">
                      {{ plug.value ? "On" : "Off" }}
                    </v-list-item-title>
                  </v-col>
                  <v-col cols="2">
                    <v-list-item-title class="headline mb-1">
                      <v-switch
                        v-model="plug.value"
                        color="#16BAA1"
                        :ripple="false"
                        @change="switchChanged(plug.value, plug, roomtitle)"
                      ></v-switch>
                    </v-list-item-title>
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>

      <v-row
        dense
        class="ma-2"
        v-if="plug.type === 'fan' || plug.type === 'air-conditioner'"
      >
        <v-col cols="12">
          <v-card>
            <v-list-item class="">
              <v-list-item-content>
                <v-row
                  no-gutters
                  class="flex-nowrap"
                  style="align-items:baseline;flex-flow:column"
                >
                  <v-col cols="12">
                    <v-list-item-title class="subtitle-1 mb-1 ml-3">
                      Slider
                    </v-list-item-title>
                  </v-col>
                  <v-col cols="12">
                    <v-list-item-title class="headline mb-1">
                      <v-slider
                        @change="sliderChanged($event, plug, roomtitle)"
                        :tick-labels="[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                        :max="plug.type === 'fan' ? '5' : '10'"
                        step="1"
                        ticks="always"
                        tick-size="5"
                        track-color="grey"
                        track-fill-color="#16BAA1"
                        tick-color="#16BAA1"
                        color="#16BAA1"
                        ripple="false"
                        hint="Slide to change value"
                      ></v-slider>
                    </v-list-item-title>
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>

      <v-row dense class="ma-2" v-if="plug.type === 'Telivision'">
        <v-col cols="12">
          <v-card>
            <v-list-item class="">
              <v-list-item-content>
                <v-row
                  no-gutters
                  class="flex-nowrap"
                  style="align-items:baseline;flex-flow:row"
                >
                  <v-col cols="4">
                    <v-text-field
                      type="number"
                      min="0"
                      max="100"
                      @input="channelChange($event, plug, roomtitle)"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-subheader>Channel +/-</v-subheader>
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="">
              <v-list-item-content>
                <v-row
                  no-gutters
                  class="flex-nowrap"
                  style="align-items:baseline;flex-flow:row"
                >
                  <v-col cols="4">
                    <v-text-field
                      type="number"
                      min="0"
                      max="100"
                      @input="volumeChange($event, plug, roomtitle)"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-subheader>Volume +/-</v-subheader>
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import firebase from "firebase";
import NavBar from "../components/NavBar";

export default {
  name: "Operations",
  components: {
    NavBar
  },
  mounted() {},
  computed: {
    isNotSmallScreen() {
      return !this.$vuetify.breakpoint.xsOnly;
    }
  },
  methods: {
    sliderChanged(e, switchId, roomTitle) {
      let userId;
      let currentUser = firebase.auth().currentUser;
      if (currentUser != null) {
        userId = currentUser.uid;
      }
      let path = userId + "/rms/" + roomTitle + "/brd/" + switchId.id;
      var database = firebase.database();
      database.ref(path).update({ speed: e });
    },
    switchChanged(switch1, switchId, roomTitle) {
      if (switchId.type === "curtain" && switch1 === true) {
        this.start_curtain_animate("10%");
      }
      if (switchId.type === "curtain" && switch1 === false) {
        this.start_curtain_animate("39.5%");
      }
      let userId;
      let currentUser = firebase.auth().currentUser;
      if (currentUser != null) {
        userId = currentUser.uid;
      }
      let path = userId + "/rms/" + roomTitle + "/brd/" + switchId.id;
      var database = firebase.database();
      database.ref(path).update({ value: Number(switch1) });
    },
    getIcon(type, val) {
      if (type === "air-conditioner") {
        return "mdi-air-conditioner";
      }
      if (type === "light-bulb") {
        return "mdi-lightbulb-on";
      }
      if (type === "geyser") {
        return "mdi-water-boiler";
      }
      if (type === "curtain") {
        return "mdi-window-open";
      }
      if (type === "motion-sensor") {
        return "mdi-account-settings";
      }
      if (type === "fan") {
        return "mdi-fan";
      }
      if (type === "Telivision" && !val) {
        return "mdi-television";
      }
      if (type === "Telivision" && val) {
        return "mdi-television-guide";
      }
    },
    getColor(val, type) {
      if (val && type === "light-bulb") return "yellow";
      if (val && type === "fan") return "#911f1f";
      if (val && type === "air-conditioner") return "blue";
      if (val) return "#16BAA1";
      return "grey";
    },
    getType(type) {
      if (type !== "fan-no-slider") return type;
      return "fan";
    },
    start_curtain_animate(to_width) {
      document
        .querySelector("#curtain-left")
        .animate({ width: to_width }, 3000);
      document
        .querySelector("#curtain-right")
        .animate({ width: to_width }, 3000);
    },
    channelChange(event, switchId, roomTitle) {
      let userId;
      let currentUser = firebase.auth().currentUser;
      if (currentUser != null) {
        userId = currentUser.uid;
      }
      let path = userId + "/rms/" + roomTitle + "/brd/" + switchId.id;
      var database = firebase.database();
      database.ref(path).update({ ch: event });
    },
    volumeChange(event, switchId, roomTitle) {
      let userId;
      let currentUser = firebase.auth().currentUser;
      if (currentUser != null) {
        userId = currentUser.uid;
      }
      let path = userId + "/rms/" + roomTitle + "/brd/" + switchId.id;
      var database = firebase.database();
      database.ref(path).update({ vol: event });
    }
  },
  data() {
    return {
      roomtitle: "",
      plug: null,
      userdata: null,
      range: 0
    };
  },
  created() {
    this.roomtitle = this.$route.params.roomtitle;
    this.plug = this.$route.params.plug;
    this.userdata = this.$route.params.userdata;
  }
};
</script>
<style lang="scss" scoped>
.fa-beat {
  animation: fa-beat 1s ease 1;
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  5% {
    transform: scale(1.25);
  }
  20% {
    transform: scale(1);
  }
  30% {
    transform: scale(1);
  }
  35% {
    transform: scale(1.25);
  }
  50% {
    transform: scale(1);
  }
  55% {
    transform: scale(1.25);
  }
  70% {
    transform: scale(1);
  }
}
.circle-fan {
  animation: rotation 1s 1 linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

#curtain {
  width: 36px;
  height: 36px;
  background: #eee;
  position: relative;
}

#curtain-left {
  position: absolute;
  top: 18%;
  left: 10%;
  width: 39.5%;
  height: 70%;
  background: #eca77f;
}

#curtain-right {
  position: absolute;
  top: 18%;
  right: 10%;
  width: 39.5%;
  height: 70%;
  background: #eca77f;
}

#curtain-bar {
  position: absolute;
  top: 10%;
  left: 7.5%;
  width: 85%;
  height: 10%;
  background: #ff6f61;
}

/* .boil {
  animation: wave 1s linear 0s 1;
}

@keyframes wave {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
} */

.circle {
  position: absolute;
  height: 36px;
  width: 36px;
  border: 1px solid blue;
  border-radius: 0 50% 50% 50%;
  transform: rotate(45deg);
  animation: wave 1s linear 0s 2;
}

.circle:nth-child(1) {
  animation-delay: 0ms;
}

.circle:nth-child(2) {
  animation-delay: 300ms;
}

.circle:nth-child(3) {
  animation-delay: 600ms;
}

@keyframes wave {
  0% {
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.disabled-curtain {
  #curtain-left {
    background-color: grey;
  }
  #curtain-right {
    background-color: grey;
  }
  #curtain-bar {
    background-color: grey;
  }
}

.v-avatar,
#curtain {
  background-color: transparent !important;
}
.v-list-item__icon {
  margin: 0px !important;
}
.v-avatar {
  margin: 0px !important;
  height: 60px !important;
  width: 60px !important;
}
</style>
