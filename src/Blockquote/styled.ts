import { Blockquote } from 'reakit';
import { darken } from 'polished';
import { theme } from 'styled-tools';
import styled from '../styled';
import { BlockquoteProps } from './Blockquote';

export default styled(Blockquote)<BlockquoteProps>`
  border-left: 4px solid ${darken(0.2, 'white')};
  padding: 1rem;

  & {
    ${theme('fannypack.Blockquote.base')};
  }
`;
