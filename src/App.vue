<template>
  <div>
    <div class="preloader"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import { onMounted } from 'vue';
export default {
  name: 'App',
  setup() {
    onMounted(() => {
      document.documentElement.classList.add('dark');
    });
  },
};
</script>
