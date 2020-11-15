<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">Sign In</span>
        </v-card-title>
        <!--ID, PASSWORD -->
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="ID"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <!-- END OF ID, PASSWORD -->
        <div class="text-center">
          <v-btn
            depressed
            color="blue accent-3"
            text
            @click="closeDialog"
          >
            Cancel
          </v-btn>
          <v-btn
            color="purple darken-2"
            text
            @click="closeDialog"
          >
            Sign In
          </v-btn>
          <v-btn
            color="pink darken-2"
            text
            @click="changePage('createAccount')"
          >
            Create Account
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  @Prop({ default:false }) isOpen!: boolean;
  
  private dialog = false;

  @Emit('close')
  private closeDialog(): void {
    this.dialog = false;
  }

  @Emit('emitPage')
  private changePage(page: string): void {
    this.closeDialog();
  }

  private mounted(): void {
    this.dialog = !this.isOpen;
  }
}
</script>

<style scoped>

</style>