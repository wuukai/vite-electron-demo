<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/counter';

const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);

</script>

<template>

    <h1>测试2</h1>

    <p>{{ count }}</p>
    <button @click="counterStore.increment()">增加 1</button>

</template>
