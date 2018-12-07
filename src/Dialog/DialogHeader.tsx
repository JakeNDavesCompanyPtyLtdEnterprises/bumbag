import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import { DialogHeader as _DialogHeader } from './styled';

export interface LocalDialogHeaderProps {
  children: React.ReactNode;
  className?: string;
}
export type DialogHeaderProps = LocalDialogHeaderProps & ReakitBoxProps;

export const DialogHeader: React.FunctionComponent<LocalDialogHeaderProps> = ({ children, ...props }) => (
  <_DialogHeader {...props}>{children}</_DialogHeader>
);

DialogHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
DialogHeader.defaultProps = {
  className: undefined
};

export default DialogHeader as React.FunctionComponent<DialogHeaderProps>;
