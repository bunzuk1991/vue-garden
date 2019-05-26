<template>
  <v-app class="green lighten-5">
    <app-header></app-header>
    <div>
      <template v-if="error">
      <v-snackbar
        :multi-line="true"
        :timeout="5000"
        color="error"
        @input="closeError"
        :value="true"
      >
        {{ error}}
        <v-btn
          dark
          flat
          @click="closeError"
        >
          Close
        </v-btn>
      </v-snackbar>
    </template>
    </div>
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
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>
