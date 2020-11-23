<template>
  <v-container
    class="spacing-playground pa-16"
    fluid
  >
    <form
        class="pl-16 pr-16"
    >
      <v-text-field
      v-model="id"
      label="ID"
      required
      ></v-text-field>
      <v-text-field
      v-model="password"
      label="Password"
      required
      ></v-text-field>
      <v-row>
        <v-col cols="5">
          <v-text-field
          v-model="familyName"
          :counter="10"
          :rules="nameRules"
          label="Family Name"
          required
          ></v-text-field>
        </v-col>
        <v-col cols="5">
          <v-text-field
          v-model="givenName"
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
          v-model="familyNameK"
          :counter="10"
          :rules="nameRules"
          label="Family Name(KANA)"
          required
          ></v-text-field>
        </v-col>
        <v-col cols="5">
          <v-text-field
          v-model="givenNameK"
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
      v-model="birthDate"
      label="BirthDate"
      required
      ></v-text-field>
      <!-- TODO: ーーーvalidate追加  -->
      <v-text-field
      v-model="tel"
      label="TEL"
      required
      ></v-text-field>
      <v-checkbox
      v-model="isAgree"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
      ></v-checkbox>
      <v-btn
      :disabled="!valid"
      color="purple"
      class="mr-4"
      @click="save"
      >
      Save
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
    </form>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator';
import { UserRequest } from '@/components/User.ts';
// import { VForm } from '@/components/types.ts';

@Component
export default class CreateAccount extends Vue {
    // @Ref('form') readonly form!: VForm;
    private valid = true;
    // form info
    private id = '';
    private password = '';
    private familyName = '';
    private givenName = '';
    private familyNameK = '';
    private givenNameK = '';
    private email = '';
    private birthDate = '';
    private tel = '';
    private select = null;

    private isAgree = false;

    // TODO: validate 
    private nameRules =  [
      (            v: unknown) => !!v || 'Name is required',
      (            v: string|unknown[]) => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ];
    private emailRules = [
      (            v: unknown) => !!v || 'E-mail is required',
      (            v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ];

    private users: UserRequest = {
      id: '',
      password: '',
      familyName: '',
      givenName: '',
      familyNameK: '',
      givenNameK : '',
      email: '',
      birthDate: '',
      tel: '',
      status: -1,
      registerDate: '',
      lastAccessDate: ''
    };

    private save (): void {
      // this.form.validate();

      this.users = {
        id: this.id,
        password: this.password,
        familyName: this.familyName,
        givenName: this.givenName,
        familyNameK: this.familyNameK,
        givenNameK : this.givenNameK,
        email: this.email,
        birthDate: this.birthDate,
        tel: this.tel,
        status: 0,
        registerDate: Date.now() + '',
        lastAccessDate: Date.now() + ''
      };
      // data upload
      (this as any).$firebase.firestore().collection('user').doc('todoNumber').set(this.users);
      // TODO: 등록에러, 성공 메세지
    }

    private reset (): void {
      // TODO: reset
      //this.form.reset();
    }

    private resetValidation(): void {
      // TODO: validate
      //this.form.resetValidation();
    }
}
</script>

<style scoped>

</style>