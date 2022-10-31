import '~/styles/fonts/index.scss';

import { animate, colors, fontFamily } from '~/styles/twind/theme';
import { apply, setup, silent, strict } from 'twind/shim';
import { body, button, html, i } from '~/styles/twind/tags';

import { plugins } from '~/styles/twind/plugins';

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
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        btn: [`2px solid ${theme('colors.quaternary')}`, '2px'],
      }),
    },
  },
  preflight: () => ({
    html,
    body,
    button,
    i,
    '[id=app]': apply('bg-secondary'),
  }),
  plugins,
});
