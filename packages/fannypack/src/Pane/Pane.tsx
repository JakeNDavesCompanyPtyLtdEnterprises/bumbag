import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';
import { Omit } from '../types';

import _Pane from './styled';

export type LocalPaneProps = {
  border?: boolean | 'shadow';
  className?: string;
  children?: React.ReactNode;
  elevation?: string;
  isFullWidth?: boolean;
};
export type PaneProps = LocalPaneProps & Omit<ReakitBoxProps, 'border'>;

export const Pane: React.FunctionComponent<LocalPaneProps> = ({ border, children, ...props }) => (
  <_Pane styledBorder={border} {...props}>
    {children}
  </_Pane>
);

export const panePropTypes = {
  border: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['shadow'])]) as PropTypes.Validator<
    LocalPaneProps['border']
  >,
  className: PropTypes.string,
  children: PropTypes.node,
  isFullWidth: PropTypes.bool,
  elevation: PropTypes.string
};
Pane.propTypes = panePropTypes;

export const paneDefaultProps = {
  border: false,
  className: undefined,
  children: undefined,
  isFullWidth: false
};
Pane.defaultProps = paneDefaultProps;

const C: React.FunctionComponent<PaneProps> = Pane;
export default C;
