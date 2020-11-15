<template>
<!-- carousels -->
    <div class="vbox">
            <div class="imgs">
                <img class="icon" src="..\..\assets\icons\arrow_left.svg">
                <img class="img" src="..\..\assets\img\enolaHomes.jpg" @click="showDetail">
                <img class="icon" src="..\..\assets\icons\arrow_right.svg">
            </div>
            <div class="button-area">
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
            </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HomeContainer extends Vue {
  private showDetail(): void {
    console.log('detail clicked');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .vbox {
    width: 100%;
    height: 100%;
} */

.imgs {
    width: 1000px;
    height: 500px;
    text-align: center;
    margin-bottom: -80px;
}

.img {
    height: 70%;
    margin-top: 50px;
}

.icon {
    height: 30%;
    margin-bottom: 100px;
}

.button-area{
    display: flex;
    flex-direction: row;
    margin: auto;
    width: 20%;
}

.button {
  height: 25px;
  width: 25px;
  background-color: rgb(209, 180, 180);
  border-radius: 50%;
  display: inline-block;
  margin: 5px 12px;
  cursor: pointer;
}

.button:hover {
    background-color: rgb(197, 69, 209);
}
</style>