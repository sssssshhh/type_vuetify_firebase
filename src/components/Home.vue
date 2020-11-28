<template>
  <div class="box">
      <nav-bar @emitPage="emitPage"/>
      <home-container v-if="openPage ==='A00'"/>
      <create-account v-if="openPage ==='A01'"/>
      <movie-selection v-if="openPage ==='M00'"/>
      <admin-container v-if="openPage ==='B00'"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HomeContainer from '@/components/component/HomeContainer.vue';
import NavBar from '@/components/component/NavBar.vue';
import CreateAccount from '@/components/component/CreateAccount.vue';
import MovieSelection from '@/components/component/MovieSelection.vue';
import SeatSelection from '@/components/component/SeatSelection.vue';
import AdminContainer from '@/components/admin/AdminContainer.vue';

@Component({
  components: {
    HomeContainer,
    NavBar,
    CreateAccount,
    MovieSelection,
    SeatSelection,
    AdminContainer
  }
})
export default class Home extends Vue {
  @Prop() private msg!: string;
  
  private openPage = 'A00';

  // firebase test
  private mounted(): void {

    // const data = {title: 'new', content: 'ddd'};
    // const forUpdate = {content: 'ccc'};
    // // 자동생성 id  (this as any).$firebase.firestore().collection('test2').add(data);
    // // 유의미한 id  
    // // set, update 가능
    // (this as any).$firebase.firestore().collection('test2').doc('new-city-id').set(data);
    // // 일부만 수정할 경우 update() ex {}
    // (this as any).$firebase.firestore().collection('test2').doc('new-city-id'
    // ).update(forUpdate);
    // // TODO: createTimes: 서버가 업데이트를 수신하는 시기를 추적하는 서버 타임스탬프
    // const docRef = (this as any).$firebase.firestore().collection('test2').doc('new-city-id'
    // );
    
    // // delete
    // docRef.delete().then(function() {
    //   console.log('Document successfully deleted!');
    // }).catch(function(error: any) {
    //   console.error('Error removing document: ', error);
    // });
  }
  
  // ページ移動
  private emitPage(page: string): void {
    // 会員登録
    if(page === 'createAccount') {
      this.openPage ='A01';
    }

    // 管理者ページ
    if(page === 'Administrator') {
      this.openPage ='B00';
    }

    // 映画選択
    if(page === 'movieSelection') {
      this.openPage ='M00';
    }
  }
}
</script>

<style scoped>
  .box {
    display: flex;
    flex-direction: row;
  }
</style>
