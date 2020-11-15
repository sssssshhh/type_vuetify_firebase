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
              mailAdd
            </th>
            <th class="text-left">
              password
            </th>
            <th class="text-left">
              lastName
            </th>
            <th class="text-left">
              firstName
            </th>
            <th class="text-left">
              lastNameKana
            </th>
            <th class="text-left">
              firstNameKana
            </th>
            <th class="text-left">
              birthDate
            </th>
            <th class="text-left">
              tell1
            </th>
            <th class="text-left">
              tell2
            </th>
            <th class="text-left">
              tell3
            </th>
            <th class="text-left">
              status
            </th>
              <th class="text-left">
              registDate
            </th>
            <th class="text-left">
              lastAccessDate
            </th>
            <th class="text-left">
              lastUpdateDate
            </th>
            <th class="text-left">
              lastUpdateDate
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in users"
            :key="item.memberId"
          >
            <td>{{ item.memberId }}</td>
            <td>{{ item.mailAdd }}</td>
            <td>{{ item.password }}</td>
            <td>{{ item.lastName }}</td>
            <td>{{ item.firstName }}</td>
            <td>{{ item.lastNameKana }}</td>
            <td>{{ item.firstNameKana }}</td>
            <td>{{ item.birthDate }}</td>
            <td>{{ item.tell1 }}</td>
            <td>{{ item.tell2 }}</td>
            <td>{{ item.tell3 }}</td>
            <td>{{ item.status }}</td>
            <td>{{ item.registDate }}</td>
            <td>{{ item.lastAccessDate }}</td>
            <td>{{ item.lastUpdateDate }}</td>
            <td>{{ item.LastUpdateUser }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { User } from '@/components/User.ts';

@Component
export default class UserList extends Vue {
  private users: User[] = [];

  private mounted(): void {
    //データ
    this.users = [
      {
        memberId: '1',
        mailAdd: 'aaaaa@gmail.com',
        password: '1111',
        lastName: 'taro',
        firstName: 'yamada',
        lastNameKana: 'タロ',
        firstNameKana: 'ヤマダ',
        birthDate: '20000101',
        tell1: '000',
        tell2: '0000',
        tell3: '0000',
        status: '1',
        registDate: '20200101',
        lastAccessDate:'20200101',
        lastUpdateDate:'20200101',
        LastUpdateUser:'1',
      },
      {
        memberId: '2',
        mailAdd: 'bbbb@gmail.com',
        password: '2222',
        lastName: 'tadashi',
        firstName: 'takada',
        lastNameKana: 'タダシ',
        firstNameKana: 'タカダ',
        birthDate: '20000101',
        tell1: '000',
        tell2: '0000',
        tell3: '0000',
        status: '1',
        registDate: '20200101',
        lastAccessDate:'20200101',
        lastUpdateDate:'20200101',
        LastUpdateUser:'1',
      }
    ];
  }
}
</script>

<style>

</style>