import { theme } from 'styled-tools';

import styled, { space } from '../styled';
import { Box } from '../primitives';
import { CardCardProps } from './CardCard';
import { CardContentProps } from './CardContent';
import { CardFooterProps } from './CardFooter';
import { CardHeaderProps } from './CardHeader';
import { CardTitleProps } from './CardTitle';
import Pane from '../Pane';
// @ts-ignore
import Text from '../Text';

export default styled(Pane)<CardCardProps>`
  padding: ${space(6, 'minor')}rem;

  & {
    ${theme('fannypack.Card.base')};
  }
`;
export const CardContent = styled(Box)<CardContentProps>`
  & {
    ${theme('fannypack.Card.Content.base')};
  }
`;
export const CardHeader = styled(Box)<CardHeaderProps>`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: ${space(4)}em;
  position: relative;
  width: 100%;

  & {
    ${theme('fannypack.Card.Header.base')};
  }
`;
export const CardFooter = styled(Box)<CardFooterProps>`
  display: flex;
  padding-top: ${space(4)}rem;
  width: 100%;

  & {
    ${theme('fannypack.Card.Footer.base')};
  }
`;
export const CardTitle = styled(Text)<CardTitleProps>`
  font-weight: ${theme('fannypack.fontWeights.semibold')};
  font-size: ${theme('fannypack.fontSizes.300')}rem;

  & {
    ${theme('fannypack.Card.Title.base')};
  }
`;
