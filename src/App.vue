<template>
  <v-app class="green lighten-5">
    <app-header></app-header>
    <v-content>
      <router-view></router-view>
    </v-content>
    <app-footer center></app-footer>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
