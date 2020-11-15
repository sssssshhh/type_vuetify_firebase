<template>
  <v-container
    class="spacing-playground pa-16"
    fluid
  >
    <v-row justify="center">
      <v-col
        v-for="n in 5"
        :key="n"
        cols="auto"
      >
        <v-card
          height="100"
          width="100"
          class="secondary"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
            v-text="1"
          ></v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MovieSelection extends Vue {

}
</script>

<style scoped>

</style>