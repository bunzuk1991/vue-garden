<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }"></template>
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" flat @click="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'AppConfirmDialog',
  props: ['buttonTitle'],
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    openDialog () {
      this.dialog = true
    }
  }
}
</script>

<style scoped>

</style>
