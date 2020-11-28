<template>
  <v-container
    class="spacing-playground pa-16"
    fluid
  >
    <v-form
    class="pl-16 pr-16"
    ref="form"
    v-model="valid"
    lazy-validation
    >
      <v-row>
        <v-col cols="5">
          <v-text-field
          v-model="movieName"
          :counter="10"
          :rules="nameRules"
          label="Movie Name"
          required
          ></v-text-field>
        </v-col>
        <v-col cols="5">
          <v-text-field
          v-model="movieNameE"
          :counter="10"
          :rules="nameRules"
          label="Movie Name(Eng)"
          required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5">
          <v-text-field
          v-model="pdYear"
          :counter="10"
          :rules="nameRules"
          label="Procue Year"
          required
          ></v-text-field>
        </v-col>
        <!-- TODO: SELECT -->
        <v-col cols="5">
          <v-text-field
          v-model="hallCode"
          :counter="10"
          :rules="nameRules"
          label="Hall Code"
          required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5">
          <v-text-field
          v-model="screeningDate"
          :counter="10"
          label="Screening Date"
          required
          ></v-text-field>
        </v-col>
        <v-col cols="5">
          <v-text-field
          v-model="screeningTime"
          :counter="10"
          label="Screening Time"
          required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-col cols="4">
        <v-file-input 
        accept="image/*"
        label="please upload movie poster" 
        truncate-length="100" 
        dense>
        </v-file-input>
      </v-col>
      <v-btn
      :disabled="!valid"
      color="purple"
      class="mr-4"
      @click="save"
      >
      save
      </v-btn>
      <v-btn
      color="pink lighten-4"
      class="mr-4"
      @click="reset"
      >
      Reset Form
      </v-btn>
      <v-btn
      color="teal darken-1"
      @click="resetValidation"
      >
      Reset Validation
      </v-btn>   
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator';
import { VForm } from '@/components/types.ts';
import { Movie } from '../MovieInfo';

@Component
export default class UploadMovie extends Vue {
  @Ref('form') readonly form!: VForm;
  private valid = true;
  private movieName = '';
  private movieNameE = '';
  private pdYear = '';
  private hallCode = '';
  private screeningTime = '';
  private screeningDate = '';
  
  private nameRules =  [
    (v: unknown) => !!v || 'Name is required',
    (v: string|unknown[]) => (v && v.length <= 10) || 'Name must be less than 10 characters',
  ];

  private movies: Movie = {
    movieName: '',
    movieNameE: '',
    pdYear: '',
    hallCode: '',
    screeningDate: '',
    screeningTime : ''
  };
  
  private save (): void {
    // TODO: VALIDATE
    // this.form.validate();
    this.movies = {
      movieName: this.movieName,
      movieNameE: this.movieNameE,
      pdYear: this.pdYear,
      hallCode: this.hallCode,
      screeningDate: this.screeningDate,
      screeningTime : this.screeningTime
    };
    // data upload
    (this as any).$firebase.firestore().collection('movie').doc().set(this.movies)
      .then(() => {
        this.$toast.success('success');
      }).catch(() => {
        this.$toast.error('error');
      });
  }

  private reset (): void {
    this.form.reset();
  }

  private resetValidation(): void {
    this.form.resetValidation();
  }
}
</script>

<style scoped>
</style>