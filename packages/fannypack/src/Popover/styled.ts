import _Popover from 'reakit/Popover';

import styled, { space, theme } from '../styled';
import Button from '../Button';
import { PopoverCloseProps } from './PopoverClose';
import { PopoverToggleProps } from './PopoverToggle';
import { PopoverShowProps } from './PopoverShow';
import { PopoverHideProps } from './PopoverHide';
import { PopoverPopoverProps } from './PopoverPopover';

export const PopoverHide = styled(_Popover.Hide)<PopoverHideProps>`
  ${theme('fannypack.Popover.Hide.base')};
`;

export const PopoverShow = styled(_Popover.Show)<PopoverShowProps>`
  ${theme('fannypack.Popover.Show.base')};
`;

export const PopoverToggle = styled(_Popover.Toggle)<PopoverToggleProps>`
  ${theme('fannypack.Popover.Toggle.base')};
`;

export const PopoverClose = styled(Button)<PopoverCloseProps>`
  position: absolute;
  width: 24px;
  min-height: 24px;
  right: 0;
  top: 0;
  padding: 0px;
  text-align: right;

  ${theme('fannypack.Popover.Close.base')};
`;

export const Popover = styled(_Popover)<PopoverPopoverProps>`
  display: block;
  padding: ${space(5)}rem;

  ${theme('fannypack.Popover.base')};
`;

export default Popover;
