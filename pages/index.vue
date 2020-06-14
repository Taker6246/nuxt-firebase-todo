<template>
  <v-app>
    <!-- メインコンテンツ -->
    {{ test }}
  </v-app>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    source: String
  },
  data() {
    return {
      test: 'TEST'
    }
  }
}
</script>
