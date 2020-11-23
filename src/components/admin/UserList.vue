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
              id
            </th>
            <th class="text-left">
              password
            </th>
            <th class="text-left">
              name
            </th>
            <th class="text-left">
              name(kana)
            </th>
            <th class="text-left">
              email
            </th>
            <th class="text-left">
              birthDate
            </th>
            <th class="text-left">
              tel
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
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in users"
            :key="user.id"
          >
            <td>{{ user.id }}</td>
            <td>{{ user.password }}</td>
            <td>{{ user.familyName + user.givenName }}</td>
            <td>{{ user.familyNameK + user.givenNameK }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.birthDate }}</td>
            <td>{{ user.tel }}</td>
            <td>{{ user.status }}</td>
            <td>{{ user.registDate }}</td>
            <td>{{ user.lastAccessDate }}</td>
            <td>{{ user.lastUpdateDate }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { UserResponse } from '@/components/User.ts';

@Component
export default class UserList extends Vue {
  // private users: UserResponse[] = [];

  get users(): UserResponse[] {
    const getUser: UserResponse[] = [];

    const getDoc = (this as any).$firebase.firestore().collection('user').doc('todoNumber');
    getDoc.get().then(function(doc: any) {
      if (doc.exists) {
        const user = {
          id: doc.data().id,
          password: doc.data().password,
          familyName: doc.data().familyName,
          givenName: doc.data().givenName,
          familyNameK: doc.data().familyNameK,
          givenNameK: doc.data().givenNameK,
          email: doc.data().email,
          birthDate: doc.data().birthDate,
          tel: doc.data().tel,
          status: doc.data().status,
          registDate: doc.data().registDate,
          lastAccessDate: doc.data().registDate,
          lastUpdateDate: doc.data().registDate,
        };
        getUser.push(user);
      } else {
        console.log('No such document!');
      }
    }).catch(function(error: any) {
      console.log('Error getting document:', error);
    });
    console.log(getUser);
    return getUser;
  }
}
</script>

<style>

</style>