<template>
    <nav class="bg-gray-600">
        <ul>
            <li v-for="(item, key) in menuItems" :key="key">
                <router-link
                    :to="item.to"
                    :class="{ active: isActive(item.to) }"
                >
                    {{ item.title }}
                </router-link>
            </li>
        </ul>
    </nav>
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
