<script setup>
import { ref } from 'vue';
</script>

<template>
  <h1>router测试</h1>
  <RouterLink to="/">
    <button>首页</button>
  </RouterLink>

  <RouterLink to="/about">
    <button>关于</button>
  </RouterLink>
  <div>
    <RouterView></RouterView>
  </div>
</template>
