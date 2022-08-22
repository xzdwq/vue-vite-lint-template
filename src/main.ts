import { tw } from 'twind';
import { createApp } from 'vue';
import App from '~/app.vue';

import '~/styles/twind.config';

const app = createApp(App);

app.config.globalProperties.$tw = tw;

app.mount('#app');
