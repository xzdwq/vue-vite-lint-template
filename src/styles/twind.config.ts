import '~/assets/fonts/benzin/stylesheet.css';
import '~/assets/fonts/montserrat/stylesheet.css';
import '~/assets/fonts/segoe-ui/stylesheet.css';
import '~/assets/icons/material/stylesheet.css';

import { animate, colors, fontFamily } from '~/styles/definitions/theme';
import { apply, setup, silent, strict } from 'twind/shim';
import { body, button, html, i } from '~/styles/definitions/tags';

import { plugins } from '~/styles/definitions/plugins';

/** @type {import('twind').Configuration} */
setup({
  mode: silent ?? strict,
  darkMode: 'class',
  theme: {
    extend: {
      colors,
      fontFamily,
      animation: animate.animation,
      keyframes: animate.keyframes,
      outline: (theme) => ({
        btn: [`2px solid ${theme('colors.quaternary')}`, '2px'],
      }),
    },
  },
  preflight: () => ({
    html,
    body,
    button,
    i,
    '[id=app]': apply('h-full bg-secondary'),
  }),
  plugins,
});
