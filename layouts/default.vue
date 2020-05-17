<template>
  <v-app id="inspired">
    <TheHeading />
    <v-content color="light-blue darken-4">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <nuxt />
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import TheHeading from '~/components/TheHeading.vue'
export default {
  components: {
    TheHeading
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
