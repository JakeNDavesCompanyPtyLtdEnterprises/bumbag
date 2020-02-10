import { cssClass } from '../styled';
import { theme } from '../utils';

export const Inline = styleProps => cssClass`
  display: inline;

  & {
    ${theme(`${styleProps.themeKey}.css.root`)(styleProps)};
  }
`;
