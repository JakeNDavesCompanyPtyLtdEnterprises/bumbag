import { cssClass } from '../styled';
import { palette, space, theme } from '../utils';

export const Divider = styleProps => cssClass`
    border: 1px solid ${palette('white800')(styleProps)};
    border-width: 0 0 1px 0;
    margin: ${space(4)(styleProps)}em 0;
    padding: 0;
    width: auto;
    height: 0;

    &[aria-orientation="vertical"] {
      border-width: 0 1px 0 0;
      margin: 0 ${space(4)(styleProps)}em;
      width: 0;
      height: auto;

      & {
        ${theme(`${styleProps.themeKey}.css.vertical`)(styleProps)};
      }
    }

  & {
    ${theme(`${styleProps.themeKey}.css.root`)(styleProps)};
  }
`;
