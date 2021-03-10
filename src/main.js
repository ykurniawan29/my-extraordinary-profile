import { createApp } from 'vue';
import App from '/@/App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import '/@/index.css';

import './assets/scss/main.scss';
const app = createApp(App);
app.use(router);
app.mount('#app');
app.component('fa-icon', FontAwesomeIcon);
