<template>
  <v-container class="spacing-playground pa-4">
    <div class="blue lighten-3 text-center pa-2">
      <span>screen</span>
    </div>
    <v-row>
       <div class="text-center blue-grey lighten-4 ma-3">
        <div v-for="num in columnNum" class="ma-2" :key="num">{{ num }}</div>
      </div>
      <div class="text-center ma-3">
        <v-row>
          <div>a</div>
          <div>b</div>
        </v-row>
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Seat } from '@/components/MovieInfo.ts';

@Component
export default class SeatSelection extends Vue {
  private columnNum = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m'];
  private seatInfo: Seat[] = [];
 
  private mounted(): void {
    this.seatInfo = [
      // TODO: SERVER 통신 필요
    ];
  }
}
</script>

<style scoped>

</style>