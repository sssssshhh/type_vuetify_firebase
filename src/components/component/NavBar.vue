<template>
  <div class="nav">
    <v-navigation-drawer
      permanent
      expand-on-hover
    >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/lego/5.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              Visitor
            </v-list-item-title>
            <v-list-item-subtitle>visiter.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item link @click="openDialog">
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <v-list-item-title >login</v-list-item-title>
          <Login :isOpen="!isOpen" @close="close" @emitPage="emitPage" v-if="isOpen"/>
        </v-list-item>
        <v-list-item link @click="emitPage('movieSelection')">
          <v-list-item-icon>
            <v-icon>mdi-video-vintage</v-icon>
          </v-list-item-icon>
          <v-list-item-title>movies</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
        nav
        dense>
        <v-list-item link @click="emitPage('Administrator')">
          <v-list-item-icon>
            <v-icon>mdi-account-cowboy-hat</v-icon>
          </v-list-item-icon>
          <v-list-item-title>administrator</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import Login from '@/components/dialog/Login.vue';
import CreateAccount from '@/components/component/CreateAccount.vue';

@Component({
  components: {
    Login,
    CreateAccount
  }
})
export default class NavBar extends Vue {
  private isOpen = false;

  @Emit('emitPage')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private emitPage(page: string): void {}

  private openDialog(): void {
    this.isOpen = true;
  }

  public close(): void {
    this.isOpen = false;
  }
}
</script>

<style scoped>

</style>