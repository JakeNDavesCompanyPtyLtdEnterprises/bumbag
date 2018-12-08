import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { BackdropProps as ReakitBackdropProps } from 'reakit/ts/Backdrop/Backdrop';

import _Backdrop from './styled';
import {
  Omit,
  AnimateProps,
  animatePropTypes,
  animateDefaultProps,
  RestrictHideProps,
  restrictHidePropTypes,
  restrictDefaultProps
} from '../types';

export interface Props {
  use?: any;
  children?: React.ReactNode;
  className?: string;
  /** Whether or not to show the component */
  isVisible?: boolean;
  onClick?(): void;
}
type LocalBackdropProps = Props & AnimateProps & RestrictHideProps;
export type BackdropProps = ReakitBackdropProps & Props;

export const Backdrop: React.FunctionComponent<LocalBackdropProps> = ({ children, isVisible, ...props }) => (
  <_Backdrop visible={isVisible} {...props}>
    {children}
  </_Backdrop>
);

Backdrop.propTypes = {
  use: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
  isVisible: PropTypes.bool,
  onClick: PropTypes.func,
  ...animatePropTypes,
  ...restrictHidePropTypes
};
Backdrop.defaultProps = {
  use: undefined,
  children: undefined,
  className: undefined,
  isVisible: false,
  onClick: undefined,
  ...animateDefaultProps,
  ...restrictDefaultProps
};

const C: React.FunctionComponent<BackdropProps> = Backdrop;
export default C;
