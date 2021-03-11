<template>
  <header
    class="w-80 flex fixed left-0 min-h-screen xl:pt-20 md:pt-12 px-10 pb-16 items-start flex-col bg-lightbg2 dark:bg-darkbg2"
  >
    <div id="logo" class="mx-auto">
      <a href="#">
        <img class="max-h-40" src="cat.svg" alt="Ini kucing" />
      </a>
    </div>

    <nav>
      <ul class="xl:my-48 md:my-24 list-none p-0">
        <li class="py-3 relative" v-for="(item, key) in menuItems" :key="key">
          <router-link
            :to="item.to"
            :class="{ active: isActive(item.to) }"
            class="font-extrabold text-lg dark:text-white dark:hover:text-primary transition duration-300 ease-in-out"
          >
            <fa-icon
              class="mx-4 text-2xl text-primary"
              :icon="['fas', item.icon]"
              fixed-width
            ></fa-icon>
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </nav>

    <div id="footer" class="items-center mt-auto mx-auto dark:text-primary">
      <span>&COPY;2021 Vozark</span>
    </div>
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
