// @flow
import { palette, theme } from 'styled-tools';
// @ts-ignore
import Label from 'reakit/Label';

import { Box } from '../primitives';
import styled, { css } from '../styled';
import HiddenInput from '../_utils/HiddenInput';
import { Omit } from '../types';
import { RadioProps } from './Radio';
import { RadioGroupProps } from './RadioGroup';

export const RadioIcon = styled(Box)<{ state?: string }>`
  border: 1px solid #bdbdbd;
  box-shadow: inset 0px 1px 2px #e5e5e5;
  border-radius: 100%;
  height: 1em;
  position: relative;
  width: 1em;

  & {
    ${props =>
      props.state &&
      css`
        border-color: ${props => palette(`${props.state}Lighter`)(props)};
        box-shadow: ${props => palette(`${props.state}Lighter`)(props)} 0px 0px 0px 1px !important;
      `};
  }

  & {
    ${theme('fannypack.Radio.base')};
  }
`;

export const HiddenRadio = HiddenInput({
  Icon: RadioIcon,
  checkedIconCss: css`
    background: ${palette('primaryLighter')};
    border-radius: 50%;
    content: '';
    height: 8px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
  `,
  disabledCheckedIconCss: css`
    background: ${palette('grayLighter')};
  `,
  themePrefix: 'Radio'
});

export const Radio = styled(Label)<Omit<RadioProps, 'label'>>`
  display: flex;
  align-items: center;

  & {
    ${theme('fannypack.Radio.label')};
  }
`;

const horizontalProperties = css`
  display: flex;

  & ${Radio}:not(:last-child) {
    margin-right: 1rem;
    margin-bottom: unset;
  }

  & {
    ${theme('fannypack.RadioGroup.horizontal')};
  }
`;

export const RadioGroup = styled(Box)<{ isHorizontal?: boolean }>`
  & ${Radio}:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  & {
    ${props => props.isHorizontal && horizontalProperties};
  }
`;

export default Radio;
