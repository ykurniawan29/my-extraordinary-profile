<template>
  <navigation-menu :menuItems="menuItems"></navigation-menu>
  <main class="ml-72">
    <router-view v-slot="{ Component }">
      <transition name="zoom-fade">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </main>
</template>

<script>
import { reactive, computed } from 'vue';
import menuItems from '/@/layouts/components/navigations';
import navigationMenu from '/@/layouts/components/Navigation.vue';
import bestFooter from '/@/layouts/components/Footer.vue';

export default {
  components: {
    navigationMenu,
    bestFooter,
  },
  setup() {
    return { menuItems };
  },
};
</script>
