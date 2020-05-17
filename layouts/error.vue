<template>
  <v-app id="inspired">
    <TheHeading />
    <v-content color="light-blue darken-4">
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-flex v-if="error.statusCode === 404" tag="h1">
            {{ pageNotFound }}
          </v-flex>
          <v-flex v-else tag="h1">
            {{ otherError }}
          </v-flex>
        </v-row>
        <v-row>
          <NuxtLink to="/">
            Home page
          </NuxtLink>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app />
  </v-app>
</template>

<script>
import TheHeading from '~/components/TheHeading.vue'

export default {
  layout: 'empty',
  components: {
    TheHeading
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 40px;
}
</style>
