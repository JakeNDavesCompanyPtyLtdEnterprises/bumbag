import { palette, theme } from 'styled-tools';
import Label from 'reakit/Label';

import { Box } from '../primitives';
import styled, { css, selector } from '../styled';
import HiddenInput from '../_utils/HiddenInput';
import { Omit } from '../types';
import { RadioProps, LocalRadioProps } from './Radio';

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
        border-color: ${(props: any) => palette(`${props.state}`)(props)};
        box-shadow: ${(props: any) => palette(`${props.state}`)(props)} 0px 0px 0px 1px !important;
      `};
  }

  & {
    ${theme('fannypack.Radio.base')};
  }
`;

export const HiddenRadio = HiddenInput<Omit<LocalRadioProps, 'label'>>({
  Icon: RadioIcon,
  checkedIconCss: css`
    background: ${palette('primary')};
    border-radius: 50%;
    content: '';
    height: 0.5em;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0.5em;
  `,
  disabledCheckedIconCss: css`
    background: ${palette('gray300')};
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

  & ${selector(Radio)}:not(:last-child) {
    margin-right: 1rem;
    margin-bottom: unset;
  }

  & {
    ${theme('fannypack.RadioGroup.horizontal')};
  }
`;

export const RadioGroup = styled(Box)<{ isHorizontal?: boolean }>`
  & ${selector(Radio)}:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  & {
    ${props => props.isHorizontal && horizontalProperties};
  }
`;

export default Radio;
