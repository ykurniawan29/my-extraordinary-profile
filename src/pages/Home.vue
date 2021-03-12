<template>
  <section class="flex items-center min-h-screen h-screen">
    <div class="w-full px-3 mx-auto">
      <div class="relative m-auto max-w-2xl text-center">
        <img
          class="mx-auto h-40 pb-6 rounded"
          src="memes/ipinxixi.jpeg"
          alt=""
          srcset=""
        />
        <h1 class="text-5xl text-white pb-6">This is Home</h1>
        <h2 class="pb-4 text-2xl">Hei bro, apakabs?</h2>
        <ul class="list-none mt-4">
          <li
            class="inline-block mr-6 last:mr-0"
            v-for="(item, key) in socials"
            :key="key"
          >
            <a :href="item.link" target="_blank" rel="noopener noreferrer">
              <fa-icon
                class="text-xl text-white hover:text-primary transition duration-300 ease-in-out"
                :icon="['fab', item.icon]"
                fixed-width
              ></fa-icon
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';
export default {
  name: 'Home',
  setup() {
    const socials = [
      {
        icon: 'gitlab',
        link: 'https://gitlab.com/ykurniawan29',
      },
      {
        icon: 'github',
        link: 'https://github.com/ykurniawan29',
      },
      {
        icon: 'facebook',
        link: 'https://facebook.com/ykurniawan29',
      },
      {
        icon: 'instagram',
        link: 'https://instagram.com/ysfku_',
      },
    ];
    return { socials };
  },
};
</script>
