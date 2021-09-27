<template>
  <v-app>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <Loading />
  </v-app>
</template>

<script>
import Loading from '~/components/Loading'

export default {
  components: {
    Loading
  }
}
</script>
