import { apply, setup, strict } from 'twind/shim';

import { plugins } from '~/styles/definitions/plugins';
import { body, button, html, i } from '~/styles/definitions/tags';
import { animation, colors, fontFamily, keyframes } from '~/styles/definitions/theme';

import '~/assets/fonts/benzin/stylesheet.css';
import '~/assets/fonts/montserrat/stylesheet.css';
import '~/assets/fonts/segoe-ui/stylesheet.css';
import '~/assets/icons/material/stylesheet.css';
import '~/styles/variables.css';

import { loadMode } from '~/styles/mode';

/** @type {import('twind').Configuration} */
setup({
  mode: strict,
  // hash: (value) => 'tw-'+value,
  darkMode: 'class',
  theme: {
    extend: {
      colors,
      fontFamily,
      keyframes,
      animation,
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

// Load theme mode
loadMode();
