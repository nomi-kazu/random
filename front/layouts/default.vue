<template>
  <v-app>
    <TheHeader @click="onDrawer()" />
    <v-main color="info">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  }),

  methods: {
    onDrawer () {
      this.drawer = !this.drawer
    }
  }
}
</script>
