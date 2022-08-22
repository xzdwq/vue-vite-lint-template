import { css } from 'twind/css';
import { apply } from 'twind/shim';

/**
 * HTML
 */
export const html = apply('h-full w-full font-base');

/**
 * Body
 */
export const body = apply('m-0 relative h-full');

/**
 * Button
 */
export const button = apply('border-none m-0 p-0 decoration-0 cursor-pointer font-base rounded inline-flex items-center text-base focus:outline-btn');

/**
 * I
 */
export const i = css({
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
});
