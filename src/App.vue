<template>
    <div id="app">
        <h1>Profilenya Yusuf Gantenk</h1>
        <router-view></router-view>
    </div>
</template>

<script>
import { onMounted } from 'vue';
export default {
    name: 'App',
    setup() {
        onMounted(() => {
            document.body.classList.add('theme-dark');
        });
    },
};
</script>
