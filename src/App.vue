<script setup>
import { ref, reactive, computed } from 'vue'
import index from './Demos/index.vue';

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
}



import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)


</script>

<template>
  <el-config-provider :locale="locale">
    <img src="/vue-static/icons/icon.ico" width="25px">

    <el-button @click="toggleDark()">
      {{ isDark ? '明亮模式' : '暗黑模式' }}
    </el-button>

    <RouterLink to="/">
      <el-button type="primary">APP</el-button>
    </RouterLink>
    <RouterLink to="/test">
      <el-button type="success">TEST</el-button>
    </RouterLink>

    <el-button @click="toggle()">切换中英文</el-button>

    <RouterView></RouterView>
  </el-config-provider>
</template>
