import '~/styles/quasar/index.scss';
import '~/styles/twind.config';

import * as QuasarInstance from 'quasar';

import App from '~/app.vue';
import { createApp } from 'vue';
import { i18n } from '~/lang/i18n';
import langEnUS from 'quasar/lang/en-US';
import { tw } from 'twind';

const app = createApp(App);

app.config.globalProperties.$tw = tw;

app
  .use(QuasarInstance.Quasar, {
    config: {},
    components: { ...QuasarInstance },
    directives: { QuasarInstance },
    plugins: { QuasarInstance },
    lang: langEnUS,
  })
  .use(i18n)
  .mount('#app');
