import '~/styles/palette.scss';

import * as twindColors from 'twind/colors';

/**
 * Font Family
 */
export const fontFamily = {
  base: 'Montserrat, Segoe UI, sans-serif, -apple-system, Arial',
  'segoe-ui': 'Segoe UI',
  montserrat: 'Montserrat',
  benzin: 'Benzin',
  // https://marella.me/material-icons/demo/
  material: 'Material Icons Outline',
  'material-filled': 'Material Icons',
};

/**
 * Colors
 */
export const colors = {
  ...twindColors,
  primary: 'var(--primary)',
  accent: 'var(--accent)',
  secondary: 'var(--secondary)',
  tertiary: 'var(--tertiary)',
  quaternary: 'var(--quaternary)',
  positive: 'var(--positive)',
  negative: 'var(--negative)',
  info: 'var(--info)',
  warning:'var(--warning)',
};

/**
 * Animate. Keyframes
 */
export const animate = {
  animation: {
    'scale-pulse': 'scale-pulse .3s cubic-bezier(0.4, 0.0, 0.2, 1)',
  },
  keyframes: {
    'scale-pulse': {
      '0%': { transform: 'scale(1) rotate(0deg)' },
      '50%': { transform: 'scale(0.2) rotate(30deg)' },
      '100%': { transform: 'scale(1) rotate(0deg)' },
    },
  },
};
