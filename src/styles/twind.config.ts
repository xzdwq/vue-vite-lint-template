import * as colors from 'twind/colors';
import { apply, setup, strict } from 'twind/shim';

import { plugins } from '~/styles/definitions/plugins';
import { body, button, html, i } from '~/styles/definitions/tags';
import { fontFamily } from '~/styles/definitions/theme';

import '~/assets/fonts/benzin/stylesheet.css';
import '~/assets/fonts/montserrat/stylesheet.css';
import '~/assets/fonts/segoe-ui/stylesheet.css';
import '~/assets/icons/material/stylesheet.css';

/** @type {import('twind').Configuration} */
setup({
  mode: strict,
  hash: (value) => 'tw-'+value,
  theme: {
    extend: {
      colors,
      fontFamily,
      outline: (theme) => ({
        'btn': [`2px solid ${theme('colors.gray.300')}`, '2px'],
      }),
    },
  },
  preflight: () => ({
    html,
    body,
    button,
    i,
    '[id=app]': apply('h-full relative'),
  }),
  plugins,
});
