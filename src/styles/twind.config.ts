import * as colors from 'twind/colors';
import { css } from 'twind/css';
import { apply, setup, strict } from 'twind/shim';

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
      fontFamily: {
        base: 'Segoe UI, Montserrat, sans-serif, -apple-system, Arial',
        'segoe-ui': 'Segoe UI',
        montserrat: 'Montserrat',
        benzin: 'Benzin',
        material: 'Material Icons Outline',
        'material-filled': 'Material Icons',
      },
      outline: (theme) => ({
        'btn': [`2px solid ${theme('colors.gray.300')}`, '2px'],
      }),
    },
  },
  preflight: (preflight, { theme }) => ({
    // ...preflight,
    html: apply('h-screen font-base'),
    body: apply('h-full relative'),
    '[id=app]': apply('h-full relative'),
    button: apply('border-none m-0 decoration-0 cursor-pointer font-base rounded inline-flex items-center text-base focus:outline-btn'),
    i: css({
      fontWeight: 'normal',
      fontStyle: 'normal',
      lineHeight: 1,
      letterSpacing: 'normal',
      textTransform: 'none',
      display: 'inline-block',
      whiteSpace: 'nowrap',
      wordWrap: 'normal',
      direction: 'ltr',
      fontFamily: 'Material Icons Outline',
      fontSize: '24px',
      padding: '2px',
      '&::after': {
        content: 'attr(data-icon)',
      },
    }),
  }),
  plugins: {
    'filled': 'font-material-filled',
  },
});
