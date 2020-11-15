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
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Family Name"
            required
            ></v-text-field>
        </v-col>
        <v-col cols="5">
            <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Given Name"
            required
            ></v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="5">
            <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Family Name(KANA)"
            required
            ></v-text-field>
        </v-col>
        <v-col cols="5">
            <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Given Name(KANA)"
            required
            ></v-text-field>
        </v-col>
    </v-row>
        <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
        ></v-text-field>
        <!-- TODO: select tagで生年月日選択するようにする -->
        <v-text-field
        v-model="email"
        :rules="emailRules"
        label="BirthDate"
        required
        ></v-text-field>
        <!-- TODO: ーーーvalidate追加  -->
        <v-text-field
        v-model="email"
        :rules="emailRules"
        label="TEL"
        required
        ></v-text-field>
        <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
        ></v-checkbox>

        <v-btn
        :disabled="!valid"
        color="purple"
        class="mr-4"
        @click="validate"
        >
        Validate
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

@Component
export default class CreateAccount extends Vue {
    @Ref('form') readonly form!: VForm;
    private valid = true;
    private name = '';
    private email = '';
    private select = null;
    private checkbox = false;
    private nameRules =  [
      (            v: unknown) => !!v || 'Name is required',
      (            v: string|unknown[]) => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ];
    private emailRules = [
      (            v: unknown) => !!v || 'E-mail is required',
      (            v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ];
    private items = [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ];


    private validate (): void {
      this.form.validate();
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