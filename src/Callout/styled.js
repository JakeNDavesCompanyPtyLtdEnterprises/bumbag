// @flow

import styled, { css } from '../styled';
import { palette, theme } from 'styled-tools';
import CardCard from '../Card/CardCard';
import CardHeader from '../Card/CardHeader';
import CardContent from '../Card/CardContent';
import CardTitle from '../Card/CardTitle';
import CardFooter from '../Card/CardFooter';
import Icon from '../Icon';

const getTintAttributes = props => {
  const { type, hasTint } = props;

  if (!hasTint || !type) {
    return;
  }

  return css`
    background-color: ${type && palette(`${type}Tint`)(props)};
    color: ${type && palette(`${type}TintInverted`)(props)};
    fill: ${type && palette(`${type}TintInverted`)(props)};
    ${theme('fannypack.Callout.tint')};
  `;
};

export default styled(CardCard)`
  border: none;
  ${getTintAttributes};

  & {
    ${theme('fannypack.Callout.base')};
  }
`;

export const CalloutHeader = styled(CardHeader)`
  display: flex;
  justify-content: flex-start;

  & {
    ${theme('fannypack.Callout.Header.base')};
  }
`;

export const CalloutContent = styled(CardContent)`
  & {
    ${theme('fannypack.Callout.Content.base')};
  }
`;

export const CalloutTitle = styled(CardTitle)`
  & {
    ${theme('fannypack.Callout.Title.base')};
  }
`;

export const CalloutFooter = styled(CardFooter)`
  & {
    ${theme('fannypack.Callout.Footer.base')};
  }
`;

export const CalloutIcon = styled(Icon)`
  margin-right: ${theme('fannypack.layout.spacing.xsmall')}rem;

  & {
    ${theme('fannypack.Callout.Icon.base')};
  }
`;
