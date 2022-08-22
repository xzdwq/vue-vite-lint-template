import * as twindColors from 'twind/colors';
import '~/styles/palette.scss';

/**
 * Font Family
 */
export const fontFamily = {
  base: 'Segoe UI, Montserrat, sans-serif, -apple-system, Arial',
  'segoe-ui': 'Segoe UI',
  montserrat: 'Montserrat',
  benzin: 'Benzin',
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
