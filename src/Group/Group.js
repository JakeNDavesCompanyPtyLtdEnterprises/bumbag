// @flow
import React, { type Node } from 'react';
import { withTheme } from 'reakit/styled';
import _get from 'lodash/get';
import { type Breakpoint } from '../typesold';
import _Group from './styled';

type Props = {
  children: Node,
  className?: string,
  isVertical?: boolean,
  theme?: Object,
  verticalAt?: Breakpoint | number
};

const getVerticalBreakpoint = ({ breakpoint, theme }: { breakpoint: Breakpoint | number, theme?: Object }) => {
  return typeof breakpoint === 'number' ? breakpoint : _get(theme, `fannypack.layout[${breakpoint}Breakpoint]`);
};

export const Group = ({ children, className, isVertical, theme, verticalAt: _verticalAt, ...props }: Props) => {
  const verticalAt = getVerticalBreakpoint({ breakpoint: _verticalAt, theme });
  return (
    <_Group className={className} vertical={isVertical} verticalAt={verticalAt} {...props}>
      {children}
    </_Group>
  );
};

Group.defaultProps = {
  className: undefined,
  isVertical: false,
  theme: {},
  verticalAt: undefined
};

export default withTheme(Group);
