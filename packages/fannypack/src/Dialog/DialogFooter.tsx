import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ReakitBoxProps } from '../types';

import { DialogFooter as _DialogFooter } from './styled';

export type LocalDialogFooterProps = {
  children: React.ReactNode;
  className?: string;
};
export type DialogFooterProps = LocalDialogFooterProps & ReakitBoxProps;

export const DialogFooter: React.FunctionComponent<LocalDialogFooterProps> = ({ children, ...props }) => (
  <_DialogFooter {...props}>{children}</_DialogFooter>
);

export const dialogFooterPropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
DialogFooter.propTypes = dialogFooterPropTypes;

export const dialogFooterDefaultProps = {
  className: undefined
};
DialogFooter.defaultProps = dialogFooterDefaultProps;

const C: React.FunctionComponent<DialogFooterProps> = DialogFooter;
export default C;
