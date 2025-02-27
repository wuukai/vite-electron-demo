<script setup>
import { ref } from 'vue';
import Demo from './Demo.vue';
import Demo2 from './Demo2.vue';
</script>

<template>
  <h1>router测试</h1>
  <RouterLink to="/test/home">
    <button>首页</button>
  </RouterLink>

  <RouterLink to="/test/about">
    <button>关于</button>
  </RouterLink>
  <div>
    <RouterView></RouterView>
  </div>
  <Demo></Demo>
  <Demo2></Demo2>

</template>
