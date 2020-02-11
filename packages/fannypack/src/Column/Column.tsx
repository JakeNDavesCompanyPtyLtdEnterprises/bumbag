import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ReakitBoxProps } from '../types';

import { ColumnSpread, ColumnSpreadOffset, columnSpreadPropType, columnSpreadOffsetPropType } from '../types';
import ColumnsContext, { ColumnsContextProps } from '../Columns/ColumnsContext';
import _Column from './styled';

export type LocalColumnProps = {
  children: React.ReactNode;
  className?: string;
  spread?: ColumnSpread;
  spreadMobile?: ColumnSpread;
  spreadTablet?: ColumnSpread;
  spreadDesktop?: ColumnSpread;
  spreadWidescreen?: ColumnSpread;
  spreadFullHD?: ColumnSpread;
  spreadOffset?: ColumnSpreadOffset;
  spreadMobileOffset?: ColumnSpreadOffset;
  spreadTabletOffset?: ColumnSpreadOffset;
  spreadDesktopOffset?: ColumnSpreadOffset;
  spreadWidescreenOffset?: ColumnSpreadOffset;
  spreadFullHDOffset?: ColumnSpreadOffset;
};
export type ColumnProps = LocalColumnProps & ColumnsContextProps & ReakitBoxProps;

export const Column: React.FunctionComponent<LocalColumnProps> = ({
  children,
  className,
  spread,
  spreadMobile,
  spreadTablet,
  spreadDesktop,
  spreadWidescreen,
  spreadFullHD,
  spreadOffset,
  spreadMobileOffset,
  spreadTabletOffset,
  spreadDesktopOffset,
  spreadWidescreenOffset,
  spreadFullHDOffset,
  ...props
}) => (
  <ColumnsContext.Consumer>
    {({ isGapless, minBreakpoint }) => (
      <_Column
        className={className}
        isGapless={isGapless}
        minBreakpoint={minBreakpoint}
        spread={spread}
        spreadMobile={spreadMobile}
        spreadTablet={spreadTablet}
        spreadDesktop={spreadDesktop}
        spreadWidescreen={spreadWidescreen}
        spreadFullHD={spreadFullHD}
        spreadOffset={spreadOffset}
        spreadMobileOffset={spreadMobileOffset}
        spreadTabletOffset={spreadTabletOffset}
        spreadDesktopOffset={spreadDesktopOffset}
        spreadWidescreenOffset={spreadWidescreenOffset}
        spreadFullHDOffset={spreadFullHDOffset}
        {...props}
      >
        {children}
      </_Column>
    )}
  </ColumnsContext.Consumer>
);

export const columnPropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  spread: columnSpreadPropType,
  spreadMobile: columnSpreadPropType,
  spreadTablet: columnSpreadPropType,
  spreadDesktop: columnSpreadPropType,
  spreadWidescreen: columnSpreadPropType,
  spreadFullHD: columnSpreadPropType,
  spreadOffset: columnSpreadOffsetPropType,
  spreadMobileOffset: columnSpreadOffsetPropType,
  spreadTabletOffset: columnSpreadOffsetPropType,
  spreadDesktopOffset: columnSpreadOffsetPropType,
  spreadWidescreenOffset: columnSpreadOffsetPropType,
  spreadFullHDOffset: columnSpreadOffsetPropType
};
Column.propTypes = columnPropTypes;

export const columnDefaultProps = {
  className: undefined,
  spread: undefined,
  spreadMobile: undefined,
  spreadTablet: undefined,
  spreadDesktop: undefined,
  spreadWidescreen: undefined,
  spreadFullHD: undefined,
  spreadOffset: undefined,
  spreadMobileOffset: undefined,
  spreadTabletOffset: undefined,
  spreadDesktopOffset: undefined,
  spreadWidescreenOffset: undefined,
  spreadFullHDOffset: undefined
};
Column.defaultProps = columnDefaultProps;

const C: React.FunctionComponent<ColumnProps> = Column;
export default C;
