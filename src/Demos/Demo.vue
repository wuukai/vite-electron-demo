<script setup>
import { reactive, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/counter';

const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);

const msg = ref("");

const btnClink = () => {
  console.log(0);
  myApi.handleSend(msg.value);
}

</script>

<template>

  <h1>测试1</h1>
  <p>{{ msg }}</p>
  <input v-model="msg" type="text">
  <button @click="btnClink">点击发送</button>
  <p>{{ count }}</p>
  <button @click="counterStore.increment()">增加 1</button>
</template>
