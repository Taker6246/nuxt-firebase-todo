<template>
  <v-app>
    <!-- トップバー -->
    <TheHeading />

    <!-- メインコンテンツ -->
    <v-content color="light-blue darken-4">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center"> </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TheHeading from '~/components/TheHeading.vue'
export default {
  components: {
    TheHeading
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    source: String
  },
  data() {
    return {}
  }
}
</script>
