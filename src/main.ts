import { tw } from 'twind';
import { createApp } from 'vue';
import App from '~/app.vue';

import * as QuasarInstance from 'quasar';
import '~/styles/quasar/main.scss';
import '~/styles/twind.config';

const app = createApp(App);

app.config.globalProperties.$tw = tw;

app
  .use(QuasarInstance.Quasar, {
    config: {},
    components: { ...QuasarInstance },
    directives: { QuasarInstance },
    plugins: { QuasarInstance },
  })
  .mount('#app');
