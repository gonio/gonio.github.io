import { createApp } from 'vue';
import App from './App.vue';
import { setupIdux } from './idux';
import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';
import { setupI18n } from '/@/locales/setupI18n';

async function bootstrap() {
  const app = createApp(App);

  setupIdux(app);

  await setupI18n(app);

  app.mount('#app');
}

bootstrap();
