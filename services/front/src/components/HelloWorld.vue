<template>
  <div id="hello">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');


socket.on("test callback", (data: any) => {
  console.log('received', data);
});
socket.emit("test", 'are you here ?');


@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
#hello {
  width: 100%;
  height: 100%;
  background-color: goldenrod;
}
</style>
