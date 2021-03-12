<template>
  <header
    class="w-72 flex fixed left-0 min-h-screen xl:pt-20 md:pt-12 px-10 pb-16 items-start flex-col bg-lightbg2 dark:bg-darkbg"
  >
    <div id="logo">
      <a href="#">
        <img class="w-36" src="logo.png" alt="Ini kucing" />
      </a>
    </div>

    <nav>
      <ul class="md:my-24 xl:my-24 list-none p-0">
        <li class="py-3 relative" v-for="(item, key) in menuItems" :key="key">
          <router-link
            :to="item.to"
            :class="{ active: isActive(item.to) }"
            class="font-extrabold text-md dark:text-white dark:hover:text-primary transition duration-300 ease-in-out"
          >
            <fa-icon
              class="mr-4 text-xl text-primary"
              :icon="['fas', item.icon]"
              fixed-width
            ></fa-icon>
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </nav>

    <div id="footer" class="mt-auto dark:text-primary">
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
