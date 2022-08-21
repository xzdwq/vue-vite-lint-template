import * as twindColors from 'twind/colors';

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
  secondary: 'var(--secondary)',
  tertiary: 'var(--tertiary)',
  quaternary: 'var(--quaternary)',
  other: 'var(--other)',
};

/**
 * Animate, keyframes
 */
export const animation = {
  'scale-pulse': 'scale-pulse .3s cubic-bezier(0.4, 0.0, 0.2, 1)',
};

export const keyframes = {
  'scale-pulse': {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(0)' },
    '100%': { transform: 'scale(1)' },
  },
};
