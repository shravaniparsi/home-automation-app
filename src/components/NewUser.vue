<template>
  <div class="add-user">
    <v-container>
      <v-layout wrap>
        <v-flex>
          <v-card elevation="4" light tag="section">
            <v-card-title>
              <v-layout align-center justify-space-between>
                <h3 class="headline">
                  ADD USER
                </h3>
                <v-flex> </v-flex>
              </v-layout>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <template>
                <v-stepper v-model="activeStepId" color="#16BAA1">
                  <v-stepper-header>
                    <v-stepper-step
                      :complete="this.activeStepId > 1"
                      step="1"
                      color="#16BAA1"
                    >
                      1
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step
                      :complete="this.activeStepId > 2"
                      step="2"
                      color="#16BAA1"
                    >
                      2
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step
                      :complete="this.activeStepId > 3"
                      step="3"
                      color="#16BAA1"
                    >
                      3
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step step="4" color="#16BAA1">
                      4
                    </v-stepper-step>
                  </v-stepper-header>

                  <v-stepper-items>
                    <v-stepper-content step="1">
                      <v-form ref="form1">
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="12">
                              <v-text-field
                                label="Set Email id"
                                outlined
                                v-model="email"
                                color="#16BAA1"
                                :rules="[rules.required, rules.email]"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12">
                              <v-text-field
                                label="Set Password"
                                outlined
                                type="password"
                                v-model="password"
                                :rules="[rules.required]"
                                color="#16BAA1"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-form>

                      <v-btn color="#16BAA1" @click="onContinue(2)">
                        Continue
                      </v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="2">
                      <v-form ref="form2">
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="12">
                              <v-text-field
                                label="Enter User's Full Name"
                                outlined
                                v-model="userFullName"
                                :rules="[rules.required]"
                                color="#16BAA1"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12">
                              <v-text-field
                                label="Number Of rooms"
                                outlined
                                v-model="NoOfRooms"
                                type="number"
                                color="#16BAA1"
                                :rules="[rules.required, rules.number]"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-form>

                      <v-btn
                        color="#16BAA1"
                        @click="OnBack(1)"
                        style="margin-right:20px"
                      >
                        Back
                      </v-btn>
                      <v-btn color="#16BAA1" @click="onContinue(3)">
                        Continue
                      </v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="3">
                      <v-form ref="form3" color="#16BAA1">
                        <v-container>
                          <span class="fields">
                            <v-row v-for="n in Number(NoOfRooms)" :key="n">
                              <v-col sm="12" lg="12"> ROOM {{ n }} </v-col>
                              <v-col sm="12" lg="4">
                                <v-text-field
                                  label="Title Of Room"
                                  outlined
                                  :class="`room-${n}-title`"
                                  color="#16BAA1"
                                  :rules="[rules.required, rules.roomTitle]"
                                ></v-text-field>
                              </v-col>
                              <v-col sm="12" lg="4">
                                <v-text-field
                                  label="Number Of switches"
                                  outlined
                                  :class="`room-${n}-switches`"
                                  type="number"
                                  color="#16BAA1"
                                  :rules="[rules.required, rules.number]"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </span>
                        </v-container>
                      </v-form>

                      <v-btn
                        color="#16BAA1"
                        @click="OnBack(2)"
                        style="margin-right:20px"
                      >
                        Back
                      </v-btn>
                      <v-btn color="#16BAA1" @click="toLastStep(4)">
                        Continue
                      </v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="4">
                      <v-form>
                        <v-container>
                          <span class="fields">
                            <v-row v-for="room in rooms" :key="room.title">
                              <v-col sm="12" lg="12" class="subtitle-1"
                                >SET SWITCHES FOR {{ room.title }}
                              </v-col>
                              <v-row
                                v-for="s in room.brd"
                                :key="s.id"
                                style="width:100%"
                              >
                                <v-col sm="12" cols="12">
                                  <v-radio-group
                                    row
                                    :label="`TYPE OF SWITCH FOR ${s.id}`"
                                    class="overline"
                                    v-model="s.type"
                                    color="#16BAA1"
                                  >
                                    <v-radio
                                      label="Light Bulb"
                                      value="light-bulb"
                                      color="#16BAA1"
                                    ></v-radio>
                                    <v-radio
                                      label="Air Conditioner"
                                      value="air-conditioner"
                                      color="#16BAA1"
                                    ></v-radio>
                                    <v-radio
                                      label="Geyser"
                                      value="geyser"
                                      color="#16BAA1"
                                    ></v-radio>
                                    <v-radio
                                      label="Curtain"
                                      value="curtain"
                                      color="#16BAA1"
                                    ></v-radio>
                                    <v-radio
                                      label="Fan"
                                      value="fan"
                                      color="#16BAA1"
                                    ></v-radio>
                                    <v-radio
                                      label="Fan without slider"
                                      value="fan-no-slider"
                                      color="#16BAA1"
                                    ></v-radio>
                                    <v-radio
                                      label="Motion sensor"
                                      value="motion-sensor"
                                      color="#16BAA1"
                                    ></v-radio>
                                    <v-radio
                                      label="Telivision"
                                      value="Telivision"
                                      color="#16BAA1"
                                    ></v-radio>
                                  </v-radio-group>
                                </v-col>
                              </v-row>
                            </v-row>
                          </span>
                        </v-container>
                      </v-form>
                      <v-btn
                        color="#16BAA1"
                        @click="toLastStep(3)"
                        style="margin-right:20px"
                      >
                        Back
                      </v-btn>
                      <v-btn color="#16BAA1" @click="addUser()">
                        Submit
                      </v-btn>
                    </v-stepper-content>
                  </v-stepper-items>
                </v-stepper>
              </template>
            </v-card-text>
            <v-divider></v-divider>
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
  mounted() {},
  methods: {
    addUser() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          var user = firebase.auth().currentUser;
          var uid;
          if (user != null) {
            uid = user.uid;
          }
          var firebaseRef = firebase.database().ref();
          var userData = this.getUserDataJSON();
          console.log(userData);
          firebaseRef.child(uid).set(userData);
          alert("USER Account Created");
        })
        .catch(error => {
          alert(error);
          alert({
            type: "error",
            title: "Error",
            text: "Error"
          });
        });
    },
    getUserDataJSON() {
      let obj = {
        userFullName: this.userFullName,
        rms: this.rooms
      };
      return obj;
    },
    toLastStep(activeStepId) {
      const refName = "form" + (activeStepId - 1);
      if (this.$refs[refName].validate()) {
        this.rooms = {};
        for (let i = 0; i < Number(this.NoOfRooms); i++) {
          let temp = {
            title: "",
            brd: {}
          };
          let classTitle = "room-" + (i + 1) + "-title";
          let titleElement = document.getElementsByClassName(classTitle);
          let title = titleElement[0].querySelector("input").value;
          temp.title = title;
          let classSwitches = "room-" + (i + 1) + "-switches";
          let titleSwitches = document.getElementsByClassName(classSwitches);
          let switches = titleSwitches[0].querySelector("input").value;
          for (let j = 0; j < Number(switches); j++) {
            let name = "sw" + (j + 1);
            let temp2 = {
              id: name,
              value: 0,
              type: "",
              speed: 0,
              ch: 0,
              vol: 0
            };
            temp.brd[name] = temp2;
          }
          this.rooms[title] = temp;
        }
        this.activeStepId = activeStepId;
      }
    },
    onContinue(activeStepId) {
      const refName = "form" + (activeStepId - 1);
      if (this.$refs[refName].validate()) {
        this.activeStepId = activeStepId;
      }
    },
    OnBack(activeStepId) {
      this.activeStepId = activeStepId;
    }
  },
  data() {
    return {
      activeStepId: 1,
      email: null,
      password: null,
      NoOfRooms: null,
      setRooms: null,
      userFullName: null,
      rooms: null,
      rules: {
        required: value => !!value || "Required.",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
        number: value => {
          const pattern = /^([1-9][0-9]*)$/;
          return pattern.test(value) || "Invalid Number.";
        },
        roomTitle: value => {
          const pattern = /^\S*$/;
          return (
            pattern.test(value) ||
            "check if there are any spaces, spaces not allowed"
          );
        }
      },
      userData: {
        userFullName: "",
        rooms: {}
      }
    };
  }
};
</script>
