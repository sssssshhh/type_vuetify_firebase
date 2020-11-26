<template>
  <v-container
      class="spacing-playground pa-8"
    >
    <v-simple-table dense>
      <template class="table" v-slot:default>
        <thead>
          <tr>
            <!-- <th class="text-left">
              *
            </th> -->
            <th class="text-left">
              movieName
            </th>
            <th class="text-left">
              movieNameE
            </th>
            <th class="text-left">
              pdYear
            </th>
            <th class="text-left">
              hallCode
            </th>
            <th class="text-left">
              screeningDate
            </th>
            <th class="text-left">
              screeningTime
            </th>
            <th class="text-left">
              movieposter
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="movie in movies"
            :key="movie.screeningId"
          >
            <td>{{ movie.movieName }}</td>
            <td>{{ movie.movieNameE }}</td>
            <td>{{ movie.pdYear }}</td>
            <td>{{ movie.hallCode }}</td>
            <td>{{ movie.screeningDate }}</td>
            <td>{{ movie.screeningTime }}</td>
            <td>{{ movie.movieposter }}</td>
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

  private getMovies(): void {
    const movieList: Movie[] = [];
    const response = (this as any).$firebase.firestore().collection('movie').doc('todoNumber');
  
    response.get().then(function(doc: any) {
      if (doc.exists) {
        const data = doc.data();
        const movie = {
          movieName: data.movieName,
          movieNameE: data.movieNameE,
          pdYear: data.pdYear,
          hallCode: data.hallCode,
          screeningDate: data.screeningDate,
          screeningTime: data.screeningTime,
          movieposter: data.movieposter
        };
        movieList.push(movie);
      }
    }).catch(function(error: any) {
      console.log('Error getting document:', error);
    });
    this.movies = movieList;
  }

  private mounted(): void {
    this.getMovies();
  }
}
</script>

<style scoped>
</style>