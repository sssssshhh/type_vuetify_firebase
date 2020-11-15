<template>
  <v-container
      class="spacing-playground pa-8"
    >
    <v-simple-table dense>
      <template class="table" v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              *
            </th>
            <th class="text-left">
              movieCd
            </th>
            <th class="text-left">
              movieNm
            </th>
            <th class="text-left">
              movieNmEn
            </th>
            <th class="text-left">
              prdYear
            </th>
            <th class="text-left">
              hallId
            </th>
            <th class="text-left">
              startTime
            </th>
            <th class="text-left">
              endTime
            </th>
            <th class="text-left">
              startDate
            </th>
            <th class="text-left">
              endDate
            </th>
            <th class="text-left">
              screeningStatus
            </th>
            <th class="text-left">
              registDate
            </th>
              <th class="text-left">
              lastUpdateDate
            </th>
              <th class="text-left">
              lastUpdateUser
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in movies"
            :key="item.screeningId"
          >
            <td>{{ item.screeningId }}</td>
            <td>{{ item.movieCd }}</td>
            <td>{{ item.movieNm }}</td>
            <td>{{ item.movieNmEn }}</td>
            <td>{{ item.prdYear }}</td>
            <td>{{ item.hallId }}</td>
            <td>{{ item.startTime }}</td>
            <td>{{ item.endTime }}</td>
            <td>{{ item.startDate }}</td>
            <td>{{ item.endDate }}</td>
            <td>{{ item.screeningStatus }}</td>
            <td>{{ item.registDate }}</td>
            <td>{{ item.lastUpdateDate }}</td>
            <td>{{ item.lastUpdateUser }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Movie } from '@/components/MovieInfo.ts';

@Component
export default class MovieList extends Vue {
  private movies: Movie[] = [];

  private mounted(): void {
    //データ
    this.movies = [
      {   screeningId: '1',
        movieCd: '1',
        movieNm: '삼진그룹 영어토익반',
        movieNmEn: 'SAMJIN COMPANY ENGLISH CLASS',
        prdYear: '2020',
        hallId: 'A',
        startTime: '18:00',
        endTime: '20:00',
        startDate: '2020-01-01',
        endDate: '2020-01-02',
        screeningStatus: true,
        registDate: '2020-01-01',
        lastUpdateDate: '2020-01-01',
        lastUpdateUser:''
      },
      {   screeningId: '2',
        movieCd: '2',
        movieNm: '도굴',
        movieNmEn: 'Collectors',
        prdYear: '2020',
        hallId: 'A',
        startTime: '10:00',
        endTime: '12:00',
        startDate: '2020-03-01',
        endDate: '2020-03-02',
        screeningStatus: true,
        registDate: '2020-01-01',
        lastUpdateDate: '2020-03-01',
        lastUpdateUser:''
      },
    ];
  }
}
</script>

<style scoped>
</style>