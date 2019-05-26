<template>
  <div>
    <v-navigation-drawer
      app
      temporary
      v-model="drawer"
      class="primary hidden-md-and-up"
      dark
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in menuItems"
          :key="`nav-drawer${i}`"
          router
          :to="item.route"
        >
          <v-list-tile-action>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app flat class="green lighten-2" dark>
      <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up">
        <v-icon>more_vert</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <span class="font-weight-light">My first</span>
        <span class="ml-1">vue+vuetify project</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          v-for="(item, i) in menuItems"
          :key="`menuitem${i}`"
          router :to="item.route"
          class="hidden-sm-and-down"
        >
          <v-icon small left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn
          flat
          class="hidden-sm-and-down"
          v-if="isUserLoggedIn"
          @click="logout"
          @openDialog="true"
        >
          <v-icon small left>exit_to_app</v-icon>
        </v-btn>
        <app-confirm-dialog></app-confirm-dialog>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import AppConfirmDialog from '@/components/AppConfirmDialog.vue'
export default {
  components: {
    AppConfirmDialog
  },
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggetIn
    },
    menuItems () {
      if (this.isUserLoggedIn) {
        return [
          {
            icon: 'visibility',
            title: 'Статті',
            route: '/books'
          },
          {
            icon: 'extension',
            title: 'Слова',
            route: '/words'
          },
          {
            icon: 'account_circle',
            title: 'Профіль',
            route: '/profile'
          }
        ]
      }
      return [
        {
          icon: 'input',
          title: 'Увійти',
          route: '/signin'
        },
        {
          icon: 'lock_open',
          title: 'Зареєструватися',
          route: '/signup'
        }
      ]
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logoutUser')
        .then(() => {
          this.$router.push('/')
        })
        .catch(() => {})
    }
  }
}
</script>
<style scoped>
</style>
