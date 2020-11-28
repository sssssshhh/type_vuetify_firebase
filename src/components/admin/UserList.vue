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
              registerDate
            </th>
              <th class="text-left">
              lastAccessDate
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in users"
            :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.password }}</td>
            <td>{{ user.familyName + user.givenName }}</td>
            <td>{{ user.familyNameK + user.givenNameK }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.birthDate }}</td>
            <td>{{ user.tel }}</td>
            <td>{{ user.status }}</td>
            <td>{{ user.registerDate }}</td>
            <td>{{ user.lastAccessDate }}</td>
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

  private async getUsers(): Promise<void> {
    const userList: User[] = [];
    const response = (this as any).$firebase.firestore().collection('user');
    await response.get().then(function(querySnapshot: { id: string; data: () => User }[]) {
      querySnapshot.forEach(function(doc: { id: string; data: () => User }) {
        if (doc) {
          const data = doc.data();
          const user = {
            id: data.id,
            password: data.password,
            familyName: data.familyName,
            givenName: data.givenName,
            familyNameK: data.familyNameK,
            givenNameK: data.givenNameK,
            email: data.email,
            birthDate: data.birthDate,
            tel: data.tel,
            status: data.status,
            registerDate: data.registerDate,
            lastAccessDate: data.registerDate
          };
          userList.push(user);
        }
      });
    }).catch(function() {
      Vue.$toast.error('error');
    });
    this.users = userList;
  }

  private mounted(): void {
    this.getUsers();
  }
}
</script>

<style>

</style>