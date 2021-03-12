import { createApp } from 'vue';
import App from '/@/App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas);
library.add(fab);
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import '/@/index.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
app.component('fa-icon', FontAwesomeIcon);
