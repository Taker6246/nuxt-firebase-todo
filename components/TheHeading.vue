<template>
  <v-app id="inspire">
    <TheSidebar :drawer="drawer" />
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">Nuxt - Firebase ToDo </span>
      </v-toolbar-title>

      <v-spacer />
      <v-icon x-large>mdi-playlist-check</v-icon>
    </v-app-bar>
  </v-app>
</template>

<script>
import TheSidebar from '~/components/TheSideBar.vue'
export default {
  components: {
    TheSidebar
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    source: String
  },
  data: () => ({
    drawer: null
  })
}
</script>
