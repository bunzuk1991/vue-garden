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
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    menuItems () {
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
        },
        {
          icon: 'exit_to_app',
          title: 'Вийти',
          route: '/logout'
        },
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
  }
}
</script>
<style scoped>
</style>
