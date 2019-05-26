<template>
  <v-footer fixed app flat class="green lighten-1" dark>
    <v-layout>
      <v-flex
        text-xs-center
        xs-12
        py-2
      >
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>

</style>
