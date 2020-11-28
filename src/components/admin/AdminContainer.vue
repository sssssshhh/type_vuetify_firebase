<template>
   <v-container class="spacing-playground pa-2">
     <div class="text-center">
        <v-btn
          depressed
          color="blue accent-3"
          text
          @click="showList('movieList')"
        >
          Movie List
        </v-btn>
        <v-btn
          color="purple darken-2"
          text
          @click="showList('userList')"
        >
          User List
        </v-btn>
        <v-btn
          color="pink darken-1"
          text
          @click="showList('uploadMoive')"
        >
          Movie Upload
        </v-btn>
      </div>
        <movie-list v-if="viewList === 'movieList'" />
        <user-list v-if="viewList === 'userList'" />
        <upload-movie v-if="viewList === 'uploadMoive'" />
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MovieList from '@/components/admin/MovieList.vue';
import UserList from '@/components/admin/UserList.vue';
import UploadMovie from '@/components/admin/UploadMovie.vue';

@Component({
  components: {
    MovieList,
    UserList,
    UploadMovie
  }
})
export default class AdminContainer extends Vue {
  private viewList = 'movieList';

  private showList(list: string): void {
    this.viewList = list;
  }
}
</script>

<style scoped>

</style>