import { apply, css } from 'twind/css';

export const plugins = {
  filled: apply('font-material-filled'),
  light: apply('bg-primary'),
  dark: css(apply('bg-primary'), { 'color-scheme': 'dark' }),
  // Quasar class override
  'q-date__calendar': apply('dark:text-accent)'),
};
