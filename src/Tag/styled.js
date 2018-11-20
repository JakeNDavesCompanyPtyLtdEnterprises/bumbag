import styled, { css } from 'reakit/styled';
import InlineBlock from 'reakit/InlineBlock';
import { palette, theme } from 'styled-tools';

const sizeAttributes = {
  medium: css`
    font-size: 1em;

    & {
      ${theme('fannypack.Tag.sizes.medium')};
    }
  `,
  large: css`
    font-size: 1.25em;

    & {
      ${theme('fannypack.Tag.sizes.large')};
    }
  `
};

const Tag = styled(InlineBlock)`
  background-color: ${palette()};
  border-radius: 4px;
  color: ${props => palette(`${props.palette}Inverted`)};
  font-size: ${theme('fannypack.fontSizes.small')}rem;
  font-weight: ${theme('fannypack.fontWeights.semibold')};
  padding: 0.2em 0.4em;

  & {
    ${props => props.size && sizeAttributes[props.size]};
  }

  & {
    ${theme('fannypack.Tag.base')};
  }
`;

export default Tag;
