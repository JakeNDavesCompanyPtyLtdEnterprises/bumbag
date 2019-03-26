import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PopoverHideProps as ReakitPopoverHideProps } from 'reakit/ts';

import { PopoverHide as _PopoverHide } from './styled';

export type LocalPopoverHideProps = {
  children: React.ReactNode;
  hide(): void;
  onClick?(): void;
};
export type PopoverHideProps = ReakitPopoverHideProps & LocalPopoverHideProps;

export const PopoverHide: React.FunctionComponent<LocalPopoverHideProps> = React.forwardRef(
  ({ children, ...props }, ref) => (
    // @ts-ignore
    <_PopoverHide {...props} ref={ref}>
      {children}
    </_PopoverHide>
  )
);

PopoverHide.propTypes = {
  children: PropTypes.node.isRequired,
  hide: PropTypes.func.isRequired,
  onClick: PropTypes.func
};
PopoverHide.defaultProps = {
  onClick: undefined
};

const C: React.FunctionComponent<PopoverHideProps> = PopoverHide;
export default C;
