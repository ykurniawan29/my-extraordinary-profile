<template>
  <header
    class="w-72 flex fixed left-0 min-h-screen pt-20 px-16 pb-16 bg-red-400 items-start flex-col"
  >
    <div class="logo">
      <a href="#">
        <img src="cat.svg" alt="Ini kucing" />
      </a>
    </div>

    <nav>
      <ul class="my-20 list-none p-0">
        <li class="py-3 relative" v-for="(item, key) in menuItems" :key="key">
          <fa-icon class="mx-2" :icon="['fas', item.icon]"></fa-icon>
          <router-link :to="item.to" :class="{ active: isActive(item.to) }">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { toRefs, computed } from 'vue';
import { useRouter } from 'vue-router';
export default {
  name: 'NavigationMenu',
  props: {
    menuItems: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const { menuItems } = toRefs(props);
    const router = useRouter();
    const activeRoute = computed(() => router.currentRoute.value.path);
    const isActive = (path) => path === activeRoute.value;

    return { isActive, menuItems };
  },
};
</script>
