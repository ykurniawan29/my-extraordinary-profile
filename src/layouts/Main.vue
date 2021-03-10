<template>
  <navigation-menu :menuItems="menuItems"></navigation-menu>
  <main class="ml-72 p-16">
    <h1 class="text-4xl">Halo bosku</h1>
  </main>
</template>

<script>
import { reactive, computed } from 'vue';
import menuItems from '/@/components/navigations';
import navigationMenu from '/@/components/Navigation.vue';
import bestFooter from '/@/components/Footer.vue';

export default {
  components: {
    navigationMenu,
    bestFooter,
  },
  setup() {
    const page = reactive({
      footerType: 'sticky',
    });

    const footerClasses = computed(() => {
      return {
        'footer-sticky': page.footerType === 'sticky',
      };
    });

    return { menuItems, footerClasses };
  },
};
</script>
