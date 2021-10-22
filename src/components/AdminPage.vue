<template>
  <div class="hello">
    <NavBar></NavBar>
    <NewUser></NewUser>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import NewUser from '@/components/NewUser.vue'

export default {
  name: 'AdminPage',
  components: {
    NavBar,
    NewUser
  },
  methods: {
  }
}
</script>

