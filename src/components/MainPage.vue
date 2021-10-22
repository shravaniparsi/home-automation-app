<template>
  <div class="hello">
    <User></User>
    <NavBar class="main-page"></NavBar>
    <Operations></Operations>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Operations from '@/components/Operations.vue'
import User from '@/components/User.vue'

export default {
  name: 'MainPage',
  components: {
    NavBar,
    Operations,
    User,
  },
  methods: {
  }
}
</script>


