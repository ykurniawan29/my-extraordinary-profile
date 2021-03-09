<template>
    <div class="layout__main" :class="[footerClasses]">
        <navigation-menu :menuItems="menuItems"></navigation-menu>
        <div id="content-area">
            <div id="content-overlay" />

            <div class="content__wrapper">
                <router-view></router-view>
                <best-footer></best-footer>
            </div>
        </div>
    </div>
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
