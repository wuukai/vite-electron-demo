<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/counter';
import { ElButton } from 'element-plus';

const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);

</script>

<template>

    <h1>测试2</h1>

    <p>{{ count }}</p>
    <button @click="counterStore.increment()">增加 1</button>

    <div>
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
        <el-table mb-1 :data="[]" />
        <el-pagination :total="100" />
    </div>
</template>
