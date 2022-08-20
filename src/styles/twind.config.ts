import * as colors from 'twind/colors';
import { apply, setup, strict } from 'twind/shim';

import '~/assets/fonts/benzin/stylesheet.css';
import '~/assets/fonts/montserrat/stylesheet.css';
import '~/assets/fonts/segoe-ui/stylesheet.css';

/** @type {import('twind').Configuration} */
setup({
  mode: strict,
  hash: (value) => 'tw-'+value,
  theme: {
    extend: {
      colors,
      fontFamily: {
        base: 'Segoe UI, Montserrat, sans-serif, -apple-system, Arial',
        segoeui: 'Segoe UI',
        montserrat: 'Montserrat',
        benzin: 'Benzin',
      },
    },
  },
  preflight: (preflight) => ({
    ...preflight,
    html: apply('h-screen font-base'),
    body: apply('h-full relative'),
    '[id=app]': apply`h-full relative`,
  }),
});
