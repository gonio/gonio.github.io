import { createApp } from 'vue';
import App from './App.vue';
import Idux from './idux';
import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';

createApp(App).use(Idux).mount('#app');
