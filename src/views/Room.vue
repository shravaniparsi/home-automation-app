<template>
  <div>
    <NavBar :showbackbutton="true"></NavBar>
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
                    <!-- <v-icon medium>mdi-fan</v-icon>
                    <br /> -->
                    <span class="white--text">{{ getTitle(roomtitle) }}</span>
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
            <v-list-item>
              <v-list-item-content>
                <v-row
                  no-gutters
                  class="flex-nowrap"
                  style="align-items:baseline"
                >
                  <v-col cols="10">
                    <v-list-item-title class="subtitle-1 mb-1 ml-3">
                      All switches on / off
                    </v-list-item-title>
                  </v-col>
                  <v-col cols="2">
                    <v-list-item-title class="headline mb-1">
                      <v-btn
                        v-model="allswitches"
                        icon
                        color="#16BAA1"
                        :ripple="false"
                        @click="allSwitchesChanged(false)"
                      >
                        <v-icon dark>
                          mdi-power
                        </v-icon>
                      </v-btn>
                    </v-list-item-title>
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense class="ma-2" v-for="r in room" :key="r.id" v-model="room">
        <v-col v-for="plug in r.brd" :key="plug.title" cols="6" lg="4">
          <v-card
            :to="{
              name: 'switch',
              params: { roomtitle: roomtitle, plug: plug }
            }"
          >
            <v-list-item class="pa-2">
              <v-list-item-content>
                <v-row no-gutters class="flex-nowrap">
                  <v-col cols="8">
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
                  </v-col>
                  <v-col class="d-flex" cols="4">
                    <v-list-item-title class="headline mb-1">
                      <v-switch
                        v-model="plug.value"
                        color="#16BAA1"
                        persistent-hint
                        :ripple="false"
                        @change="switchChanged(plug.value, plug, r.title)"
                        :class="{ 'not-small-screen': isNotSmallScreen }"
                      ></v-switch>
                    </v-list-item-title>
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <div
              class="subtitle-1 ml-4"
              style="margin-bottom:-5px;font-weight:bold"
            >
              {{ getType(plug.type) }}
            </div>
            <span class="caption ml-4">
              {{ plug.value ? "on" : "off" }}
            </span>
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
  mounted() {
    this.getSwitches(this.roomtitle);
  },
  computed: {
    isNotSmallScreen() {
      return !this.$vuetify.breakpoint.xsOnly;
    }
  },
  methods: {
    switchChanged(switch1, switchId, roomTitle) {
      if (switchId.type === "curtain" && switch1 === true) {
        this.start_curtain_animate("10%");
      }
      if (switchId.type === "curtain" && switch1 === false) {
        this.start_curtain_animate("39.5%");
      }
      let path = this.userId + "/rms/" + roomTitle + "/brd/" + switchId.id;
      var database = firebase.database();
      database.ref(path).update({ value: Number(switch1) });
    },
    allSwitchesChanged(allswitches) {
      for (let i = 0; i < this.room.length; i++) {
        const room = this.room[i];
        for (var key in room.brd) {
          console.log(key);
          if (room.brd[key].type === "curtain" && allswitches === true) {
            this.start_curtain_animate("10%");
          }
          if (room.brd[key].type === "curtain" && allswitches === false) {
            this.start_curtain_animate("39.5%");
          }
          let path =
            this.userId + "/rms/" + room.title + "/brd/" + room.brd[key].id;
          var database = firebase.database();
          database.ref(path).update({ value: Number(allswitches) });
          const a = room.brd[key].id;
          this.room[i].brd[a].value = allswitches;
        }
      }
    },
    getSwitches(roomtitle) {
      let currentUser = firebase.auth().currentUser;
      if (currentUser != null) {
        this.userId = currentUser.uid;
      }
      this.room = this.userdata.filter(a => {
        if (a.title === roomtitle) return a;
      });
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
    getTitle(title) {
      if (title === "bd") {
        return "Bedroom";
      }
      if (title === "kt") {
        return "Kitchen";
      }
      if (title === "lv") {
        return "Living Room";
      }
      return title;
    },
    start_curtain_animate(to_width) {
      document
        .querySelector("#curtain-left")
        .animate({ width: to_width }, 3000);
      document
        .querySelector("#curtain-right")
        .animate({ width: to_width }, 3000);
    }
  },
  data() {
    return {
      roomtitle: "",
      userdata: null,
      userId: "",
      room: null,
      allswitches: false
    };
  },
  created() {
    this.roomtitle = this.$route.params.roomtitle;
    this.userdata = this.$route.params.userdata;
  }
};
</script>
<style lang="scss" scoped>
.v-list-item__content {
  padding-left: 0px !important;
  padding-right: 0px !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
.v-list-item__content {
  padding: 0px;
  .v-input {
    margin-top: 0px !important;
    >>> .v-input__slot {
      margin-bottom: 0px !important;
      .v-messages {
        display: none;
      }
    }
  }
}
.v-list-item__avatar {
  margin: 0px !important;
  padding-left: 10px !important;
  height: 88px !important;
  min-width: inherit !important;
  width: inherit !important;
}
.v-list-item__icon {
  margin: 0px !important;
}
.v-avatar {
  justify-content: flex-start !important;
  .v-list-item__icon {
    align-self: center;
  }
}
.v-list-item__title {
  margin-bottom: -15px !important;
}
.not-small-screen {
  margin-left: 45px;
}
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
  background-color: white !important;
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
</style>
